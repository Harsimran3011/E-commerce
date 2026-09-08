const LoadingPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* Loader */}

        <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-black" />

        {/* Brand */}

        <p className="mt-5 text-[24px] font-bold tracking-[-1px]">Flone.</p>

        <p className="mt-2 text-[9px] uppercase tracking-[3px] text-gray-400">
          Loading
        </p>
      </div>
    </main>
  );
};

export default LoadingPage;
