import React, { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../constants/settings";

const ProjectsContext = createContext();

export function ProjectsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  async function fetchData() {
    setLoading(true)
    const url = baseUrl + "api/projects?populate=*";

    const response = await fetch(url);

    try {

      const results = await response.json();

      if (response.ok) {

        const sortedByUpdated = results.data.sort((a, b) => {
          const aPublishedDate = new Date(a.attributes.createdAt)
          const bPublishedDate = new Date(b.attributes.createdAt)

          return bPublishedDate - aPublishedDate
        });

        setData(sortedByUpdated);

      }

    } catch (error) {
      console.log(error)
      setError("Failed to fetch, Pleae try again")

    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    fetchData();
  }, [])


  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 500)

  }, [])

  return <ProjectsContext.Provider value={{
    data, setData, error,
    loading,

  }}>
    {children}
  </ProjectsContext.Provider>;

}

export const useProjects = () => useContext(ProjectsContext)
