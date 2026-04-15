export default function LoadingOverlay({ isLoading = false, text = "Carregando..." }) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
      
      <div className="flex flex-col items-center gap-4 p-6 rounded-2xl shadow-xl bg-white">
        
        {/* Spinner */}
        <div className="w-8 h-8 border-4 border-gray-300 border-t-indigo-500 rounded-full animate-spin"></div>

        {/* Texto */}
        <p className="text-gray-700 font-medium">{text}</p>

      </div>
    </div>
  );
}