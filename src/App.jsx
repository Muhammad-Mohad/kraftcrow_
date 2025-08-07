import LiveClock from './clock';
import './App.css'

const openMailInNewTab = () => {
  const mailtoLink = document.createElement('a');
  mailtoLink.href = 'mailto:hey@kraftcrow.com?subject=Get%20More%20Information';
  mailtoLink.target = '_blank';
  mailtoLink.click();
}

function App() {

  return (
    <>
      <body class="overflow-x-auto">
        <div class="min-w-[800px]">

          <div class="lg:flex lg:flex-row-reverse lg:mt-10 lg:mr-10 hidden">
            <img src="/10.svg" class='w-10 h-auto' />
          </div>
          <div class="flex justify-center mt-10 lg:flex-none lg:justify-start lg:ml-10 lg:mr-auto lg:mt-0">
            <img src="/15.svg" class='w-100 h-auto' />
          </div>
          <div class="relative mt-90">
            <div class="flex justify-center">
              <img src="/7.svg" class="w-100 h-auto" />
            </div>
            <div class="absolute -top-76 left-1/2 -translate-x-1/2">
              <img src="/2.png" class="w-100 h-auto" />
            </div>
            <div class="absolute top-90 left-1/2 -translate-x-1/2">
              <p class='font-medium'>JUL 2025</p>
              <p class='text-3xl font-semibold'>Shanasai</p>
              <br />
              <br />
              <img src="/6.png" class="w-90 h-auto border-t-4 border-[#EBFF00]" />
            </div>
            <div class="absolute top-250 left-1/2 -translate-x-1/2">
              <p class='font-medium'>FEB 2025</p>
              <p class='text-3xl font-semibold'>Backspace</p>
              <br />
              <br />
              <img src="/3.png" class="w-90 h-auto border-t-4 border-[#2A8045]" />
            </div>
            <div class="absolute top-410 left-1/2 -translate-x-1/2">
              <p class='font-medium'>Since 2020</p>
              <p class='text-3xl font-semibold'>IvoryBullet</p>
              <br />
              <br />
              <img src="/1.png" class="w-90 h-auto border-t-4 border-[#D61D1D]" />
            </div>
            <div class="absolute top-570 left-1/2 -translate-x-1/2">
              <p class='font-medium'>Since 2022</p>
              <p class='text-3xl font-semibold'>Sofar Sounds</p>
              <br />
              <br />
              <img src="/4.png" class="w-90 h-auto border-t-4 border-[#F8724B]" />
            </div>
            <div class = "absolute top-730 left-1/2 -translate-x-1/2">
              <div class="flex flex-col gap-8 justify-center items-center mt-10">
                <button
                  onClick={openMailInNewTab}
                  class="bg-white text-black font-semibold shadow-md hover:bg-gray-300 transition-all duration-200 cursor-pointer w-50 h-10"
                >
                  Email
                </button>
                <a
                  href="https://instagram.com/kraftcrow_"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="bg-white text-black font-semibold  shadow-md hover:bg-gray-300 transition-all duration-200 w-50 h-10 flex items-center justify-center"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div class="absolute top-800 left-1/2 -translate-x-1/2">
              <LiveClock class='lg:w-90 h-auto w-80' />
            </div>
            <div class="lg:w-90 h-px bg-black my-4 absolute top-807 left-1/2 -translate-x-1/2 w-80"></div>
            <div class='absolute top-814 left-1/2 -translate-x-1/2'>
              <img src="/5.svg" class='lg:w-90 h-auto w-80' />
            </div>
          </div>
          <footer class="py-4 px-6 text-center text-gray-600 text-sm">
            <div class="container mx-auto">
              <p>© 2025, Kraft Crow Studio Pvt Ltd. Lahore, Pakistan</p>
            </div>
          </footer>
        </div>
      </body>

    </>
  )
}

export default App
