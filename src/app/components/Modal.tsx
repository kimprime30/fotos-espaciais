type Props = {
    image: string;
    onClose: () => void
}

export const Modal = ({ image, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 overflow-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative max-w-3xl w-full mx-4 my-10">
        
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-2 right-2 z-10 w-10 h-10 flex items-center justify-center text-white bg-black/70 rounded-full hover:bg-red-600 transition-colors duration-200"
        >
          ×
        </button>

        
        <img
          src={`/assets/${image}`}
          alt={`Foto ampliada: ${image}`}
          className="w-full max-h-screen h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer object-contain"
          onClick={onClose}
        />
      </div>
    </div>
  );
};
