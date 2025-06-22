import useQuotes from "@/hooks/useQuotes";
import { Card, CardTitle,CardHeader, CardFooter, CardDescription } from "./ui/card";


export default function Quotes(){
     const { quote, loading, error } = useQuotes();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>
    if (!quote) return <p>No quote found.</p>

    return(
         <Card className='w-1/2 mx-auto mt-50'>
            <CardHeader>
                 <CardTitle>
                    Quote of the day
                 </CardTitle>
                <CardDescription>
                      {quote.quote}
                 </CardDescription>
            </CardHeader>
            {<CardFooter>
                {quote.author}
            </CardFooter> }

        </Card>
    )
    
}