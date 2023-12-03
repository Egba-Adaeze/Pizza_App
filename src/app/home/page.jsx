import Image from 'next/image';

export default function home() {
  return (
    <>
  <div className="">
    <div className='flex w-full'>
      <Image src="/pizza-logo_afsvzn.png" 
            alt="logo"
            width={100}
            height={24}
            priority/>
            <Image className="ml-[5rem]"
             src="/pizza-header-img_krzjsl.png"
            width={100}
            height={20}
            priority/></div>
            
             
            <nav>
                <ul>
                    <li><a href="HOMEPAGE.html">HOME</a></li>
                    <li><a href="PRODUCTS.html">PRODUCTS</a></li>
                    <li><a href="PAGES.html">PAGES</a></li>
                    <li><a href="BLOG.html">BLOG</a></li>
                    <li><a href="CONTACT.html">CONTACT</a></li>
                    <li>
                      <Image src="/search.webp"
                      width={100}
                      height={24}
                      priority/>search</li>
                    <li>
                      <Image src="/shopping-cart.webp"
                       width={100}
                       height={24}
                       priority/>
                      </li>
                </ul>
            </nav>
        </div>
   
    </>
  )
}

