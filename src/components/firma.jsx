import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const Firma = () => {
  const signatureCanvasRef = useRef(null);

  const exportImage = () => {
    if (signatureCanvasRef.current.isEmpty()) {
      alert("No se ha dibujado ninguna firma.");
      return;
    }

    const image = signatureCanvasRef.current.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "firma.png";
    link.click();
  };

  const resetSignature = () => {
    signatureCanvasRef.current.clear();
  };

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Crear firma</h1>
      <section
        style={{
          border: "1px solid black",
          marginBottom: "2rem",
          borderRadius: "5px",
        }}
      >
        <SignatureCanvas
          ref={signatureCanvasRef}
          penColor="black"
          canvasProps={{
            width: 400,
            height: 200,
            className: "signature-canvas",
          }}
        />
      </section>
      <section
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <button onClick={exportImage}>Exportar firma</button>
        <button onClick={resetSignature}>Reiniciar firma</button>
      </section>
    </main>
  );
};

export default Firma;
