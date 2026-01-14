import { useEffect, useState } from "react";
import type { User } from "../interfaces";


const DynamicUserSearch: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async (): Promise<void> => {
      try {
        setLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();

        setUsers(data);
        setFilteredUsers(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);


  useEffect(() => {
    const keyword = searchTerm.toLowerCase();

    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword)
    );

    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  if (loading) {
    return <p className="text-center mt-6">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center mt-6 text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        User Search
      </h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* User List */}
      {filteredUsers.length === 0 ? (
        <p className="text-center text-gray-500">
          No users found.
        </p>
      ) : (
        <ul className="space-y-3">
          {filteredUsers.map((user) => (
            <li
              key={user.id}
              className="p-3 bg-white rounded-md shadow-sm"
            >
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-600 text-sm">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DynamicUserSearch;
