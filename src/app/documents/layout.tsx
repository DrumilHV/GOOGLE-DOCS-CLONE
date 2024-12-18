interface DocumentsLayoutProps {
  children: React.ReactNode;
}
const DocumentsLayout = ({ children }: DocumentsLayoutProps) => {
  return <div className="flex gap-y-4 flex-col">{children}</div>;
};

export default DocumentsLayout;
