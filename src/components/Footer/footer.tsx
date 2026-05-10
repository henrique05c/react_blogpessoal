function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className=" flex justify-center bg-indigo-900 text-white">
        <div className=" container flex flex-col items-center py-4">
          <p className=" text-xl font-bold">
            Blog Pessoal Generation | Copyrigth:{data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className=" flex gap-2">
            <a
              href="https://www.linkedin.com/in/henrique-pereira-coelho-16531b3b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.797 0-9.714h3.554v1.375c.427-.659 1.191-1.597 2.898-1.597 2.117 0 3.704 1.384 3.704 4.362v5.574zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.958-1.71 1.187 0 1.914.755 1.939 1.71 0 .951-.752 1.71-1.982 1.71zm1.581 11.597H3.715V9.738h3.203v10.714zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m5.521 12c0 3.046-2.469 5.519-5.521 5.519-3.052 0-5.521-2.473-5.521-5.519 0-3.046 2.469-5.519 5.521-5.519 3.052 0 5.521 2.473 5.521 5.519zm1.063-7.5a1.563 1.563 0 11-3.126 0 1.563 1.563 0 013.126 0zm-4.584 9.75a2.292 2.292 0 110-4.584 2.292 2.292 0 010 4.584z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;