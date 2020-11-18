import AdsBar from './adsBar';

export default function ImageGallery() {
    return (
        <div className="w-full lg:w-2/5 flex flex-col-reverse lg:flex-row justify-between flex-1 h-auto lg:h-xlImageBox xl:h-imageBox">
            <AdsBar />
          <div className="h-full flex-1 overflow-y-scroll bg-black flex flex-col pb-12 hidden-scrollBar order-4 lg:order-2">
            <div className="flex flex-row justify-between px-4 pt-2 pb-6"> 
              <p className="text-white text-3xl font-VT323-Regular">BACK</p>
              <p className="text-white text-3xl font-VT323-Regular">INSTAGRAM</p>
            </div>
            <img src={"../static/image13.png"} />
            <p className="text-white mt-10 px-6 font-TeX-Regular">Ubiquitous by nature, the phenomenon of kohl has encompassed far more than a fad. With its ever-evolving renditions 
                (everything from a smokey eye to a sharp wing), eyeliner has been the piece-de-resistance of our beauty routines</p>
            <div className="px-6 flex justify-center relative mt-12">
                <img src={"../static/image 15.png"} className="w-64" />
                <img src={"../static/image16.png"} className="w-48 h-auto mt-48 absolute ml-AbsoluteImageMargin" />
            </div>
            <p className="text-white px-6 font-TeX-Regular mt-48">North Africa and the Middle East, BC. Initially derived from Ancient Egypt, it was used as a means of 
                adornment for the eyes, just as it was also thought to protect them from harsh sun rays. The widespread 
                fascination with Queen Nefertiti is also for the cause. For her sculpture became the precursor of a wide-spread 
                trend, propelling eyeliner into the 20th century.</p>
            <div className="flex flex-row justify-between items-end px-6">
                <img src={"../static/image 17.png"} />
                <p className="text-white font-VT323-Regular">BACK TO TOP</p>
            </div>
          </div>
        </div>
    )
}