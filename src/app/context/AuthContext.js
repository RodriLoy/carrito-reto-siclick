"use client";

import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:3000/api/auth/islogin"
        );

        if (data.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/logout");
      setUser(null);
    } catch (error) {
      console.error("Error al hacer logout", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
