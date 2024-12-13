import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { MyBarChart } from "./components/my-barchart";
import { MyPieChart } from "./components/my-piechart";

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-col">
        <SidebarTrigger />
        <nav className="flex justify-between items-center p-5 w-full">
          <div className="flex gap-3 items-center">
            <img src="" alt="" />
            <h1>logo</h1>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Rerum architecto, similique, illo velit maiores commodi
                    numquam dolores culpa repudiandae libero eligendi eaque
                    veniam quam eveniet veritatis est ratione itaque mollitia.
                  </p>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Documentation</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aliquam quam id eligendi, nulla repellendus beatae quia
                    minus laudantium possimus cupiditate blanditiis perferendis
                    explicabo, earum itaque, eius aperiam in? Obcaecati,
                    aliquid!
                  </p>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <section className="flex-1 min-h-0 flex gap-5 p-5">
          <MyBarChart />
          <MyPieChart />
        </section>
      </main>
    </SidebarProvider>
  );
}

export default App;
