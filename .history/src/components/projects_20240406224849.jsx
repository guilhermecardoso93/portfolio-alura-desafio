export function Projects() {
  return (
    <div className="w-full flex flex-col gap-10 mt-5 px-20">
      <h3 className="text-3xl font-bold flex mt-7  justify-center">
        Experiência profissional
      </h3>
      <div className="flex flex-row justify-center gap-10 items-center flex-wrap">
        <ul>
          <li className="flex flex-row justify-between items-center">
            <img src="https://user-images.githubusercontent.com/79944203/192125575-2dcf08b4-a1a4-4955-aa40-492f9cd21e9c.png" alt="" 
              className='w-[600px] h-[406px]'
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold">Born Pink</span>
              <span className='text-sm'>Loja de Álbuns</span>
              <div className='flex gap-5'>
                <button >
                  <a href="https://github.com/guilhermecardoso93/bornpink" alt="" target="_blank">Repositório</a>
                </button>
                <button className="w-10 h-3 text-[#2A7ae4] border-2 border-color-[#2A7ae4]">
                  <a href="https://github.com/guilhermecardoso93/bornpink" alt="" target="_blank">Ver Demo</a>
                </button>
                
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
