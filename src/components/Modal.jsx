import React from "react";

const Modal = ({ isOpen, onClose, data }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    background: "#2c2e2d",
                    borderRadius: 5,
                    padding: 20,
                    width: "80%",
                    maxWidth: 600,
                    color: "#f0f0f0",
                }}
            >
                <h2 style={{ textAlign: "center", marginBottom: 20 }}>Detalles del Producto</h2>
                <form>
                    <div style={{ marginBottom: 10, display: "flex", flexDirection: "column" }}>
                        <label>Nombre:</label>
                        <input
                            type="text"
                            value={data.nombre}
                            style={{
                                padding: 8,
                                borderRadius: 3,
                                border: "1px solid #ccc",
                                background: "#404342",
                                color: "#f0f0f0",
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 10, display: "flex", flexDirection: "column" }}>
                        <label>SKU:</label>
                        <input
                            type="text"
                            value={data.sku}
                            style={{
                                padding: 8,
                                borderRadius: 3,
                                border: "1px solid #ccc",
                                background: "#404342",
                                color: "#f0f0f0",
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 10, display: "flex", flexDirection: "column" }}>
                        <label>Inventario:</label>
                        <input
                            type="number"
                            value={data.inventario}
                            style={{
                                padding: 8,
                                borderRadius: 3,
                                border: "1px solid #ccc",
                                background: "#404342",
                                color: "#f0f0f0",
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 10, display: "flex", flexDirection: "column" }}>
                        <label>Precio:</label>
                        <input
                            type="text"
                            value={data.precio}
                            style={{
                                padding: 8,
                                borderRadius: 3,
                                border: "1px solid #ccc",
                                background: "#404342",
                                color: "#f0f0f0",
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 10, display: "flex", flexDirection: "column" }}>
                        <label>Categorías:</label>
                        <input
                            type="text"
                            value={data.categorias}
                            style={{
                                padding: 8,
                                borderRadius: 3,
                                border: "1px solid #ccc",
                                background: "#404342",
                                color: "#f0f0f0",
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 10, display: "flex", flexDirection: "column" }}>
                        <label>Colores:</label>
                        <i style={{fontSize: 10}}>Separe los colores con comas</i>
                        <input
                            type="text"
                            value={data.colores}
                            style={{
                                padding: 8,
                                borderRadius: 3,
                                border: "1px solid #ccc",
                                background: "#404342",
                                color: "#f0f0f0",
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 10, display: "flex", flexDirection: "column" }}>
                        <label>Fecha:</label>
                        <input
                            type="date"
                            value={data.fecha}
                            style={{
                                padding: 8,
                                borderRadius: 3,
                                border: "1px solid #ccc",
                                background: "#404342",
                                color: "#f0f0f0",
                            }}
                        />
                    </div>
                </form><button
                    onClick={onClose}
                    style={{
                        marginTop: 20,
                        backgroundColor: "#eee",
                        color: "#000",
                        padding: "10px 15px",
                        border: "none",
                        borderRadius: 3,
                        cursor: "pointer",
                        width: "100%",
                    }}
                >
                    Agregar
                </button>
                <button
                    onClick={onClose}
                    style={{
                        marginTop: 20,
                        backgroundColor: "#404342",
                        color: "#f0f0f0",
                        padding: "10px 15px",
                        border: "none",
                        borderRadius: 3,
                        cursor: "pointer",
                        width: "100%",
                    }}
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

export default Modal;
