import CardsContainer from "@/app/components/cards/CardsContainer";
//TODO - Post section 
export default function Posts(){
  return (
    <section className="flex flex-col justify-center items-center h-full w-full gap-y-5 mt-6">
      <h1 className="font-semibold text-2xl dark:text-white">Posts</h1>
      <CardsContainer/>
    </section>
  )
}