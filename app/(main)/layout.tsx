import NavigationSidebar from "@/components/navigation/navigation-sidebar";

interface Props {
  children: React.ReactNode;
}

const MainLayout = async ({ children }: Props) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-[72px] z-30 flex-col fixed inset-0">
        <NavigationSidebar />
      </div>
      <div className="md:pl-[72px] h-full">{children}</div>
    </div>
  );
};

export default MainLayout;
