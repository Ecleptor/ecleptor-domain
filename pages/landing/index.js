import Head from "next/head"
import Image from "next/image"

import { ChevronDownIcon } from '@heroicons/react/outline';

function index() {

    let pc_width = 600;

    return (

        <div>

        <Head>
        <title>Rebblr | Landing</title>
        </Head>
            
            {/*  Color background */}
            <div style={{width: '100%', height: '100%', position: 'absolute'}} className="overflow-hidden">
            <Image src="/misc/landing_rect.png" layout='fill' objectFit='cover' min-h-screen min-w-full/>
            </div>

            {/* Bienvenido a rebblr text */}
            <h4 className="relative top-[240px] xl:text-[90px] md:text-[30px] ml-16 font-bold xl:max-w-[400px]">¡Bienvenido a Rebblr!</h4>

            {/* About Rebblr */}
            <p className="relative top-[250px] ml-16 font-bold xl:max-w-[480px] inline-block">una comunidad donde cmpartir historias nunca habia sido más gratificante. La biblioteca online donde los escritores, lectores y ávidos de la lectura se reunen para compartir sus historias y crecer en conjunto.</p>

            {/* PC image */}
            <div className="ml-[700px] relative bottom-40">
            <Image src="/misc/landing_pc.png" width={pc_width} height={pc_width - 150}/>
            </div>

            {/* Rebblr bottom logo */}
            <div className="relative bottom-40 float-right">
            <Image src="/branding/Logo_gem_color.png" width={40} height={40}/>
            </div>

            {/* Scroll icon */}
            <div className="flex w-full justify-center absolute bottom-[6px]">
            <ChevronDownIcon className="text-ligthgray w-10 h-10 text-stone-500"/>
            </div>
        </div>
    )
}

export default index
