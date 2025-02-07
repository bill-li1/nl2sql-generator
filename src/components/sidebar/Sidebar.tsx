import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import CodeView from "@/components/sidebar/CodeView"
import SchemaView from "@/components/sidebar/SchemaView"

export default function Sidebar() {
  return (
    <div className="p-4 pt-2 min-w-[30rem] h-full flex flex-col gap-4">
      <Tabs defaultValue={"visual"} className="flex flex-col w-full h-full">
        <TabsList className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0 mb-2">
          <TabsTrigger
            value="visual"
            className="inline-flex items-center justify-center whitespace-nowrap py-1 text-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Visual
          </TabsTrigger>
          <TabsTrigger
            value="sql"
            className="inline-flex items-center justify-center whitespace-nowrap py-1 text-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            SQL
          </TabsTrigger>
        </TabsList>
        <TabsContent value="visual" className="overflow-scroll">
          <SchemaView />
        </TabsContent>
        <TabsContent value="sql" className="overflow-scroll">
          <CodeView />
        </TabsContent>
      </Tabs>
    </div>
  )
}
