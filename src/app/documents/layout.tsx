interface DocumentsLayoutProps {
  children: React.ReactNode;
}
const DocumentsLayout = ({ children }: DocumentsLayoutProps) => {
  return (
    <div className="flex gap-y-4 flex-col">
      <nav className="w-full bg-red-500"> Navbar</nav>
      {children}
    </div>
  );
};

export default DocumentsLayout;
