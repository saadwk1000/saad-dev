import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import MessageCard, {
  type MessageProps,
} from "../../shared/components/messageCard";
import styles from "./style.module.scss";

interface ApiError {
  message?: string;
  error?: string;
}

const Admin: React.FC = () => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");

        const response = await axios.get<MessageProps[]>(
          "https://saad-dev-3i23.onrender.com/api/messages",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        setMessages([...response.data].reverse());
      } catch (err) {
        const axiosError = err as AxiosError<ApiError>;

        const errorMessage =
          axiosError.response?.data?.message ||
          axiosError.response?.data?.error ||
          axiosError.message ||
          "Failed to sync with database";

        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className={styles.adminPage}>
      <header className={styles.dashboardHeader}>
        <h1>
          Admin <span className={styles.gold}>Console</span>
        </h1>
        <p>Inbound client requests and inquiries database.</p>
      </header>

      {loading && (
        <div className={styles.statusContainer}>
          <div className={styles.spinner}></div>
          <p>Syncing secure records...</p>
        </div>
      )}

      {error && (
        <div className={styles.errorBanner}>
          <p>⚠️ {error}</p>
        </div>
      )}

      {!loading && !error && messages.length === 0 && (
        <div className={styles.statusContainer}>
          <p className={styles.emptyMessage}>
            No communications logged in database.
          </p>
        </div>
      )}

      {!loading && !error && messages.length > 0 && (
        <div className={styles.messageGrid}>
          {messages.map((msg) => (
            <MessageCard key={msg._id} data={msg} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
