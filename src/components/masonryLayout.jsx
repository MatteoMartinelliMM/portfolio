// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const MasonryLayout = ({ items }) => {
    // Definisco lo stato per il numero di colonne
    const [columnCount, setColumnCount] = useState(1);

    // Funzione per aggiornare il numero di colonne in base alla larghezza dello schermo
    useEffect(() => {
        const updateColumnCount = () => {
            if (window.innerWidth >= 1024) {
                setColumnCount(3); // Desktop largo
                return;
            }
            if (window.innerWidth >= 640) {
                setColumnCount(2); // Schermo medio
                return;
            }
            setColumnCount(1); // Mobile (default)
        };

        updateColumnCount(); // Imposta il numero di colonne all'inizio
        window.addEventListener("resize", updateColumnCount); // Aggiorna al ridimensionamento
        return () => window.removeEventListener("resize", updateColumnCount);
    }, []);

    // Stato per le colonne
    const [columns, setColumns] = useState([]);

    // Divide gli elementi in colonne sequenzialmente ogni volta che items o columnCount cambiano
    useEffect(() => {
        const newColumns = Array.from({ length: columnCount }, () => []);
        // eslint-disable-next-line react/prop-types
        items.forEach((item, index) => {
            newColumns[index % columnCount].push(item); // Assegna l'elemento alla colonna
        });
        setColumns(newColumns);
    }, [items, columnCount]);

    return (
        <div className="flex ">
            {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col w-full md:w-1/2 lg:w-1/3 ">
                    {col.map((item, itemIndex) => (
                        <div key={itemIndex} className="mt-5">
                            {item}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MasonryLayout;
