// app/components/UserList.js (Server Component)
export default function UserList({ users, children }) {
    return (
        <div className="user-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">📧 {user.email}</p>
            <p className="user-address">
              📍 {user.address.city}, {user.address.street}
            </p>
            {children /* Client Component */}
          </div>
        ))}
      </div>
    );
  }