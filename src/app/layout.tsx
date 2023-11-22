export const metadata = {
title: 'Airbnb' 
}


export default function RootLayout  ({ children,} : { children: React.ReactNode})
{
  return (
    <html lang='en'>{children}</html>
  )
}
