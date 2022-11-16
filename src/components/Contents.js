import React, { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
// import Content from './Content'
const Content = lazy(() => import('./Content'))

const Contents = () => {
    return (
        <div className='w-[93.7%] flex flex-col ml-20 bg-black'>
            <Suspense fallback={Loading}>
                <div className='flex'>
                    <Link to="/video"><Content image="https://i.ytimg.com/vi/UEWF5Xfd4hs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDPtuXx64Xrw0ihSJy--TlIgNGbA" dur="8:05" time="2 months" views="38K" authorImg="https://yt3.ggpht.com/ytc/AMLnZu-6FufOi5zOWaCg_eSj-s8iyCifoQbAt_3-XDVq6Q=s68-c-k-c0x00ffffff-no-rj" author="Arsh Goyal" heading="80 Lakhs CTC for Freshers in India ? | Atlassian Company Review | Interview Process | Off Campus 🔥" /></Link>

                    <Link to="/video"><Content image="https://i.ytimg.com/vi/wTeebkKg-Cs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD10OsdUxJTiTovrRybReo0hzqf7w" dur="16:06" time="11 months" views="264K" authorImg="https://yt3.ggpht.com/ytc/AMLnZu8mrNo5SSrwu9jvjmbPyFrqGVhRdGsJWrfErf28=s68-c-k-c0x00ffffff-no-rj" author="take U forward" heading="How I Got into Google Warsaw As Software Engineer | Interview EXPERIENCE | Preparation Strategies"  /></Link>
                    
                    <Link to="/video"><Content image="https://i.ytimg.com/vi/j898RGRw0b4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDuqGl-tWjfj5FpPGGSSsRJ46qA2g" dur="1:14:09" time="14 hours" views="18K" authorImg="https://yt3.ggpht.com/ytc/AMLnZu-PjRc81p0qP-ZPWxv8aY4k-4gFRzGEYs3HWbIQ=s68-c-k-c0x00ffffff-no-rj" author="Web Dev Simplified" heading="The Perfect Advanced React/TypeScript Project - Markdown Supported Note Taking With Categories"  /></Link>
                    
                    <Link to="/video"><Content image="https://i.ytimg.com/vi/Dp6lbdoprZ0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBPovdQzYsguoGH7UXFxtsbT26_JQ" dur="6:47" time="6 years" views="336M" authorImg="https://yt3.ggpht.com/v_PwNTRdcmpaEU6zh9wytm0ERtq2BOAmBQvr1QyZstphlpcPUqjbX3wqIvSRR9bWIgSjmRUJcwE=s68-c-k-c0x00ffffff-no-rj" author="T-Series" heading="Main Rahoon Ya Na Rahoon Full Video | Emraan Hashmi, Esha Gupta | Amaal Mallik, Armaan Malik"  /></Link>
                </div>
                <div className='flex'>
                    <Link to="/video"><Content image="https://i.ytimg.com/vi/fIMtuORP54Q/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3yf-D2A69FeVg6RfKoJj97HqLLw" dur="1:04" time="3 years" views="7.9M" authorImg="https://yt3.ggpht.com/3K6h6gpMPf4mK9qh6SXTl0W3PLxnOMzUnFHc2lbS9t-ucS-b4JGcR8nW7ja9XDYkHM-kAnijk2c=s68-c-k-c0x00ffffff-no-rj" author="ICC" heading="The Perfect Ball! | Kuldeep On THAT Ball To Babar | ICC Cricket World Cup 2019"  /></Link>
                    
                    <Link to="/video"><Content image="https://i.ytimg.com/vi/7AGYDM0Ueq0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8WVrtIP_TPM2b0_TY3UlmzW5wfw" dur="5:30" time="3 months" views="3.8M" authorImg="https://yt3.ggpht.com/ytc/AMLnZu-Sn_MvkkHF0uNdbQzS2t-kI5BwBqSeCFJhkN2vnQ=s68-c-k-c0x00ffffff-no-rj" author="Tech Burner" heading="Don't Buy Wireless Earphone before Watching this Video! *Under ₹2000*"  /></Link>

                    <Link to="/video"><Content image="https://i.ytimg.com/vi/30LWjhZzg50/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBa0BSpr1l3FkjzEcAO61-ITHeYjw" dur="4:46:25" time="5 days" views="68K" authorImg="https://yt3.ggpht.com/ytc/AMLnZu9UWrGceKWaqm8AF89vuxrEt8MO3E59qOoQ785Lew=s88-c-k-c0x00ffffff-no-rj" author="freeCodeCamp.org" heading="Learn TypeScript - Full Tutorial"  /></Link>

                    <Link to="/video"><Content image="https://i.ytimg.com/vi/hNx3WVi1oPU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDegffbqUEtFrPezRUAEguD9BrzUg" dur="36:15" time="4 days" views="45K" authorImg="https://yt3.googleusercontent.com/ytc/AMLnZu8dZQJYCt6Ffcd-pl113huuo_HJ3PpvgkyFk5FkrQ=s176-c-k-c0x00ffffff-no-rj-mo" author="CodeWithHarry" heading="Project 1: PDF Merger WebApp Using JavaScript & Bootstrap | JavaScript Tutorial in Hindi"  /></Link>

                </div>
                <div className='flex'>
                <Link to="/video"><Content image="https://i.ytimg.com/vi/_Z3QKkl1WyM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA4AnPMoxt1Lcf0S4Kfd49I1eT8oQ" dur="1:04" time="1 month" views="34M" authorImg="https://yt3.ggpht.com/fGvQjp1vAT1R4bAKTFLaSbdsfdYFDwAzVjeRVQeikH22bvHWsGULZdwIkpZXktcXZc5gFJuA3w=s68-c-k-c0x00ffffff-no-rj" author="Marvel Entertainment" heading="Marvel Studios’ Black Panther: Wakanda Forever | Official Trailer"  /></Link>

                <Link to="/video"><Content image="https://i.ytimg.com/vi/EXXe-G-_lxI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDXctStOsXFB3JKn1e9ai2r75OywA" dur="1:53" time="1 month" views="3.4M" authorImg="https://yt3.ggpht.com/tS0Mr_wXKbLe8Jg55HfuosSFikcorf_onJB5M5WMQtAHb69GwPRu_B4Ej0njWNdNMwnH-KRnBg=s68-c-k-c0x00ffffff-no-rj" author="FIFA" heading="The Official FIFA World Cup Qatar 2022™ Theme | FIFA World Cup 2022 Soundtrack"  /></Link>

                <Link to="/video"><Content image="https://i.ytimg.com/vi/J4ne9LlA_fM/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARh_IEMoIDAP&rs=AOn4CLBwCOgNyByMH-P4kDFkAQ7Dk50Q-g" dur="10:46" time="8 days" views="218K" authorImg="https://yt3.ggpht.com/nfrP94TD-7CC2pSqLXjeluf0SRIloELxGvCf9nL4DeJqBeonHcgwm0IePafovV8MzCWeQ9qhpA=s68-c-k-c0x00ffffff-no-rj" author="Shark Tank India" heading="A Robot from the future | Shark Tank India | Full Pitch"  /></Link>

                <Link to="/video"><Content image="https://i.ytimg.com/vi/v6ZmZ2LBd6o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAoN2_wbobTR87RA1t_craSqOW9Bg" dur="22:30" time="3 days" views="286K" authorImg="https://yt3.ggpht.com/s-bTyc4XP0dfybkL7Cw2iKdS5RJswGTMPgdKe1mARRTUd3Kz6v-ZkZLz0FEWWk1yV6dVX2I9aA=s68-c-k-c0x00ffffff-no-rj" author="pranjal kamra" heading="Best Mutual Fund for 2023"  /></Link>
                </div>
                
            </Suspense>
        </div>
    )
}

export default Contents