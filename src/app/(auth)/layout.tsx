interface AuthLayoutProps {
  children: React.ReactNode;
}
const DocumentsLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex gap-y-4 flex-col">
      <nav className="w-full bg-red-500">Auth Navbar</nav>
      {children}
    </div>
  );
};

export default DocumentsLayout;
