const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-blue-200 h-screen flex justify-center items-center relative">
      {/* Image */}
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src="./background.jpg"
          alt="An art piece."
          className="w-[480px] h-[480px] rotate-45 shadow-2xl focus:shadow-outline"
        />
      </div>
      
      {/* Children */}
      <div className="z-10">{children}</div>
    </div>
  );
};

export default AuthLayout;
