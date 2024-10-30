import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Home, List, PlusCircle, Settings, Star } from "lucide-react";

export default function StudyguideDashboard() {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Studyguide</h1>
          <Avatar>
            <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Home className="mr-2 h-4 w-4" />
                Dashboard
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Star className="mr-2 h-4 w-4" />
                Favorites
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <List className="mr-2 h-4 w-4" />
                All Outlines
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6">Welcome back, User!</h2>

          {/* Input Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Generate New Outline</h3>
            <div className="flex space-x-4">
              <Input placeholder="Enter your study topic..." className="flex-1" />
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Generate
              </Button>
            </div>
          </div>

          {/* Generated Outline Display */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold mb-4">Generated Outline</h3>
            <ScrollArea className="h-64 border rounded-md p-4">
              <ul className="space-y-2">
                <li className="font-semibold">1. Introduction to Topic</li>
                <li className="ml-4">1.1 Historical Context</li>
                <li className="ml-4">1.2 Importance in Modern Times</li>
                <li className="font-semibold">2. Key Concepts</li>
                <li className="ml-4">2.1 Fundamental Principles</li>
                <li className="ml-4">2.2 Core Theories</li>
                <li className="font-semibold">3. Applications</li>
                <li className="ml-4">3.1 Real-world Examples</li>
                <li className="ml-4">3.2 Case Studies</li>
                <li className="font-semibold">4. Challenges and Limitations</li>
                <li className="font-semibold">5. Future Directions</li>
                <li className="font-semibold">6. Conclusion</li>
              </ul>
            </ScrollArea>
          </div>

          {/* Recent Outlines */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Recent Outlines</h3>
            <ul className="space-y-2">
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Introduction to Machine Learning
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  World War II: Causes and Consequences
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="w-full justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Basics of Organic Chemistry
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
