import { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [banks, setBanks] = useState([]);

  // 🔹 Fetch all requests
  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/requests"
      );
      setUsers(res.data.users);
      setBanks(res.data.banks);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch requests");
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // 🔹 User Actions
  const approveUser = async (id) => {
    await axios.post(
      `http://localhost:5000/api/admin/approve-user/${id}`
    );
    fetchRequests();
  };

  const rejectUser = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/admin/reject-user/${id}`
    );
    fetchRequests();
  };

  // 🔹 Blood Bank Actions
  const approveBank = async (id) => {
    await axios.post(
      `http://localhost:5000/api/admin/approve-bank/${id}`
    );
    fetchRequests();
  };

  const rejectBank = async (id) => {
    await axios.delete(
      `http://localhost:5000/api/admin/reject-bank/${id}`
    );
    fetchRequests();
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin Dashboard</h1>

      {/* 🔹 USER REQUESTS */}
      <div style={styles.section}>
        <h2>User Registration Requests</h2>

        {users.length === 0 ? (
          <p>No pending user requests</p>
        ) : (
          users.map((u) => (
            <div key={u._id} style={styles.card}>
              <div>
                <strong>{u.name}</strong>
                <p>{u.email}</p>
              </div>

              <div style={styles.actions}>
                <button
                  style={styles.approve}
                  onClick={() => approveUser(u._id)}
                >
                  Approve
                </button>

                <button
                  style={styles.reject}
                  onClick={() => rejectUser(u._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 🔹 BLOOD BANK REQUESTS */}
      <div style={styles.section}>
        <h2>Blood Bank Registration Requests</h2>

        {banks.length === 0 ? (
          <p>No pending blood bank requests</p>
        ) : (
          banks.map((b) => (
            <div key={b._id} style={styles.card}>
              <div>
                <strong>{b.name}</strong>
                <p>{b.email}</p>
                <p>{b.location}</p>
              </div>

              <div style={styles.actions}>
                <button
                  style={styles.approve}
                  onClick={() => approveBank(b._id)}
                >
                  Approve
                </button>

                <button
                  style={styles.reject}
                  onClick={() => rejectBank(b._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

// 🎨 Styles
const styles = {
  container: {
    padding: "30px",
    background: "#f4f6f9",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "40px",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    margin: "10px 0",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  actions: {
    display: "flex",
    gap: "10px",
  },
  approve: {
    padding: "8px 15px",
    background: "green",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  reject: {
    padding: "8px 15px",
    background: "red",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};