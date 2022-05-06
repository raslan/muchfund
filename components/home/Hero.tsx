import Link from 'next/link';
import React from 'react';

const HeroSection = () => (
  <>
    <div className='hero max-w-7xl m-auto my-36'>
      <div className='hero-content grid grid-cols-2 w-full justify-between'>
        <div className='w-full'>
          <h1 className='text-6xl font-bold'>
            Be your own <span className='text-primary'>accountant.</span>
          </h1>
          <p className='py-6 text-xl'>
            Budget for your day to day and track all your expenses in any
            currency.
          </p>
          <Link passHref href='/api/auth/login'>
            <a className='btn btn-primary'>Get Started</a>
          </Link>
        </div>
        <div className='w-full justify-end flex'>
          <div className='max-w-sm rounded-lg w-full'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              id='Layer_1'
              data-name='Layer 1'
              viewBox='0 0 1000 1000'
              className='w-full h-full'
              version='1.1'
            >
              <ellipse
                cx='514.878'
                cy='787.564'
                rx='389.655'
                ry='45.198'
                fill='#e4e8ec'
              />
              <path
                d='M597,792H252.117a50.4,50.4,0,0,1-50.395-50.395V619.57a50,50,0,0,1,17.551-38.041l78-66.529H501.453l78,66.529A50,50,0,0,1,597,619.57Z'
                fill='#ff901b'
              />
              <path
                d='M597,792H252.117a50.4,50.4,0,0,1-50.395-50.395V619.57a50,50,0,0,1,17.551-38.041l78-66.529H501.453l78,66.529A50,50,0,0,1,597,619.57Z'
                fill='#00e7e9'
              />
              <path
                d='M201.722,716.105v25.5A50.4,50.4,0,0,0,252.117,792H597V766.5H252.117A50.4,50.4,0,0,1,201.722,716.105Z'
                fill='#00d1c5'
              />
              <path
                d='M579.448,581.529,501.453,515H470.966l78,66.529a50,50,0,0,1,17.552,38.041V792H597V619.57A50,50,0,0,0,579.448,581.529Z'
                fill='#00d1c5'
              />
              <polygon
                points='329 536 399 586 469 536 329 536'
                fill='#fff4e4'
              />
              <path
                d='M597,795H252.117a53.456,53.456,0,0,1-53.395-53.4V619.569a52.928,52.928,0,0,1,18.6-40.323l78-66.528A3,3,0,0,1,297.27,512H501.452a3,3,0,0,1,1.947.718l78,66.528A52.928,52.928,0,0,1,600,619.569V792A3,3,0,0,1,597,795ZM298.375,518l-77.154,65.811a46.931,46.931,0,0,0-16.5,35.758V741.6A47.449,47.449,0,0,0,252.117,789H594V619.569a46.935,46.935,0,0,0-16.5-35.758L500.347,518Z'
                fill='#171819'
              />
              <rect
                x='326.301'
                y='720.363'
                width='78.367'
                height='71.637'
                fill='#ffdec5'
              />
              <rect
                x='326.301'
                y='776.168'
                width='78.367'
                height='15.832'
                fill='#efb58e'
              />
              <path
                d='M404.668,795H326.3a3,3,0,0,1-3-3V720.363a3,3,0,0,1,3-3h78.367a3,3,0,0,1,3,3V792A3,3,0,0,1,404.668,795ZM329.3,789h72.367V723.363H329.3Z'
                fill='#171819'
              />
              <path
                d='M337,633a3,3,0,0,1-2.437-1.25l-66-92a3,3,0,0,1,4.876-3.5l62.791,87.527a90.063,90.063,0,0,1,12.58-20.684c11.091-13.479,24.753-20.582,39.962-20.908-53.224-39.172-60.546-43.211-61.027-43.461a3,3,0,0,1,2.37-5.51c.9.357,8.507,4.468,70.668,50.372a3,3,0,0,1-2.307,5.367c-17.454-3.1-32.577,2.891-44.925,17.82a84.2,84.2,0,0,0-13.7,24.161,3,3,0,0,1-2.395,2.029A3.068,3.068,0,0,1,337,633Z'
                fill='#171819'
              />
              <path
                d='M461.36,631.907a3,3,0,0,1-2.851-2.067,84.17,84.17,0,0,0-13.7-24.158c-12.348-14.93-27.463-20.93-44.925-17.821a3,3,0,0,1-2.308-5.367c62.161-45.9,69.774-50.015,70.668-50.372a3,3,0,0,1,2.37,5.51c-.48.25-7.8,4.289-61.026,43.461,15.211.325,28.869,7.428,39.962,20.908a90.034,90.034,0,0,1,12.579,20.685l62.792-87.528a3,3,0,0,1,4.875,3.5l-66,92A3,3,0,0,1,461.36,631.907Z'
                fill='#171819'
              />
              <path
                d='M399,756.923a3,3,0,0,1-3-3V586a3,3,0,0,1,6,0V753.923A3,3,0,0,1,399,756.923Z'
                fill='#171819'
              />
              <circle cx='423.5' cy='634.5' r='6.5' fill='#171819' />
              <circle cx='423.5' cy='676.5' r='6.5' fill='#171819' />
              <path
                d='M390.224,753.922H671a0,0,0,0,1,0,0v21.483a18.224,18.224,0,0,1-18.224,18.224H390.224A18.224,18.224,0,0,1,372,775.405v-3.259A18.224,18.224,0,0,1,390.224,753.922Z'
                fill='#b0aefa'
              />
              <path
                d='M652.776,796.629H390.224A21.248,21.248,0,0,1,369,775.405v-3.259a21.247,21.247,0,0,1,21.224-21.223H671a3,3,0,0,1,3,3v21.482A21.248,21.248,0,0,1,652.776,796.629ZM390.224,756.923A15.24,15.24,0,0,0,375,772.146v3.259a15.241,15.241,0,0,0,15.224,15.224H652.776A15.241,15.241,0,0,0,668,775.405V756.923Z'
                fill='#171819'
              />
              <path
                d='M845.613,793.662H594.777a18,18,0,0,1-17.565-21.933l47.094-210.36c3.9-17.428,18.367-29.707,35-29.707H894.509c19.417,0,33.719,19.585,29.163,39.935L880.608,763.955C876.706,781.383,862.241,793.662,845.613,793.662Z'
                fill='#fff4e4'
              />
              <path
                d='M845.613,793.662H594.777a18,18,0,0,1-17.565-21.933l47.094-210.36c3.9-17.428,18.367-29.707,35-29.707H894.509c19.417,0,33.719,19.585,29.163,39.935L880.608,763.955C876.706,781.383,862.241,793.662,845.613,793.662Z'
                fill='#dcdbff'
              />
              <path
                d='M857.562,784.5H606.727a18,18,0,0,1-17.565-21.932l47.094-210.361a39.742,39.742,0,0,1,8.6-17.281,38.189,38.189,0,0,0-20.549,26.443l-47.094,210.36a18,18,0,0,0,17.565,21.933H845.613a34.832,34.832,0,0,0,26.395-12.426A33.71,33.71,0,0,1,857.562,784.5Z'
                fill='#b0aefa'
              />
              <path
                d='M597.442,771.729l47.1-210.36c3.9-17.428,18.366-29.707,34.994-29.707H659.3c-16.628,0-31.093,12.279-35,29.707l-47.094,210.36a18,18,0,0,0,17.565,21.933h20.23A18,18,0,0,1,597.442,771.729Z'
                fill='#b0aefa'
              />
              <path
                d='M845.612,796.662H594.777a21,21,0,0,1-20.493-25.588l47.1-210.36c4.225-18.872,19.818-32.052,37.922-32.052H894.509a32.084,32.084,0,0,1,25.039,12.318,36.851,36.851,0,0,1,7.052,31.272L883.535,764.609C879.311,783.481,863.716,796.662,845.612,796.662Zm-186.311-262c-15.274,0-28.46,11.252-32.067,27.362L580.14,772.385a15,15,0,0,0,14.637,18.277H845.612c15.275,0,28.461-11.252,32.068-27.363l43.064-192.358a30.875,30.875,0,0,0-5.88-26.211,26.114,26.114,0,0,0-20.355-10.068Z'
                fill='#171819'
              />
              <path
                d='M771.455,645.407a23.7,23.7,0,0,1,.9-4.653,19.872,19.872,0,0,0-5.648-.594c-13.208.457-26.021,12.833-28.619,27.641s6,26.441,19.213,25.983c12.565-.435,24.765-11.657,28.161-25.5A22.031,22.031,0,0,1,771.455,645.407Z'
                fill='#fff'
              />
              <path
                d='M451.487,732.689h14.492A10.617,10.617,0,0,1,476.6,743.306h0a10.616,10.616,0,0,1-10.616,10.616H434.6'
                fill='#ffdec5'
              />
              <path
                d='M465.979,756.923H434.6a3,3,0,1,1,0-6h31.381a7.617,7.617,0,0,0,0-15.234H447.017a3,3,0,1,1,0-6h18.962a13.617,13.617,0,0,1,0,27.234Z'
                fill='#171819'
              />
              <path
                d='M389.985,720.363H441.41a16.78,16.78,0,0,1,16.78,16.78h0a16.78,16.78,0,0,1-16.78,16.779H390.224'
                fill='#ffdec5'
              />
              <path
                d='M441.41,756.923H390.224a3,3,0,1,1,0-6H441.41a13.78,13.78,0,0,0,0-27.56H389.984a3,3,0,1,1,0-6H441.41a19.78,19.78,0,0,1,0,39.56Z'
                fill='#171819'
              />
              <path
                d='M421.605,756.923H390.224a3,3,0,1,1,0-6h31.381a7.617,7.617,0,0,0,0-15.234H400a3,3,0,1,1,0-6h21.605a13.617,13.617,0,0,1,0,27.234Z'
                fill='#171819'
              />
              <path
                d='M326.3,795a3,3,0,0,1-3-3V707.531H284.846a3,3,0,0,1,0-6H326.3a3,3,0,0,1,3,3V792A3,3,0,0,1,326.3,795Z'
                fill='#171819'
              />
              <path
                d='M400.277,549h-5.054C324.131,549,266.5,510.369,266.5,439.277V279.183H529V439.277C529,510.369,471.369,549,400.277,549Z'
                fill='#ffdec5'
              />
              <path
                d='M267,312.892s23.184,40.044,86.91,42.272c97.425,3.405,135.875-46.915,135.875-46.915Z'
                fill='#efb58e'
              />
              <path
                d='M400.277,531.656h-5.054c-71.092,0-128.723-34.594-128.723-105.686v13.307C266.5,510.369,324.131,549,395.223,549h5.054C471.369,549,529,510.369,529,439.277V425.97C529,497.062,471.369,531.656,400.277,531.656Z'
                fill='#efb58e'
              />
              <path
                d='M400.277,552h-5.054c-36.528,0-69.516-10.247-92.89-28.854-25.4-20.225-38.833-49.227-38.833-83.869V279.183a3,3,0,0,1,3-3H529a3,3,0,0,1,3,3V439.277c0,34.642-13.429,63.644-38.833,83.869C469.793,541.753,436.805,552,400.277,552ZM269.5,282.183V439.277c0,32.75,12.646,60.128,36.57,79.174C328.386,536.216,360.048,546,395.223,546h5.054c35.175,0,66.837-9.784,89.153-27.549C513.354,499.405,526,472.027,526,439.277V282.183Z'
                fill='#171819'
              />
              <path
                d='M302,358c-13,45-35,35-35,35V273h37S310.326,329.179,302,358Z'
                fill='#ff9472'
              />
              <path
                d='M304.756,344.018a236.331,236.331,0,0,0,1.522-31.945L267,312.892S277.761,331.466,304.756,344.018Z'
                fill='#ef7756'
              />
              <path
                d='M272.368,396.94a17.1,17.1,0,0,1-6.609-1.209A3,3,0,0,1,264,393V273a3,3,0,0,1,3-3h37a3,3,0,0,1,2.981,2.665c.261,2.317,6.3,57.106-2.1,86.168L302,358l2.882.833c-5.576,19.3-13.538,31.453-23.666,36.116A21.041,21.041,0,0,1,272.368,396.94ZM270,390.751a14.606,14.606,0,0,0,8.874-1.33c5.773-2.732,13.973-10.546,20.244-32.254,7.045-24.388,3.278-69.737,2.172-81.167H270Z'
                fill='#171819'
              />
              <path
                d='M496.6,213.329c-19.044-17.223-47.287-32.724-86.8-31.586-.549,7.775,5.013,24.7,14.982,32.961-37.618-34.97-118.48-35.3-144.521-9.092,3.83,12.137,14.5,27.567,31.134,35.577-47.259-10.911-80.326,12.623-83.041,21.045,8.277,20.691,27.082,41.981,38.647,50.658,38.787,29.1,145.923,40.391,212.252,1.876,3.8-2.2,7.292-4.377,10.533-6.519-.365,16.88.328,36.3,4.215,49.751,13,45,35,35,35,35V287.02A99.267,99.267,0,0,0,496.6,213.329Z'
                fill='#ff9472'
              />
              <path
                d='M424.781,214.8v-.1c-2.353-3.313-8.761-6.057-19.078-13.191-41.125-21.3-103.228-18.259-125.443,4.1a50.05,50.05,0,0,0,2.02,5.261c29.628-19.058,92.851-20.4,129.214,6.836C416.2,221.237,424.8,220.686,424.781,214.8Z'
                fill='#ef7756'
              />
              <path
                d='M311.818,242.82a3.663,3.663,0,0,0-.424-1.631c-1.9-.421-8.786-1.054-23.429-2.811-34.471-.3-57.373,16.909-59.612,23.856.443,1.106.922,2.215,1.422,3.323,11.634-9.336,39.834-21.665,73.844-15.6A6.932,6.932,0,0,0,311.818,242.82Z'
                fill='#ef7756'
              />
              <path
                d='M496.6,213.329c-19.044-17.223-47.287-32.724-86.8-31.586a33.288,33.288,0,0,0,1.668,10.965c28.328.565,52.905,10.805,67.264,25.619,27.951,28.837,11.395,71.4-.891,86.619-14.792,18.326-23.8,21.495-23.8,21.495s29.735-8.52,35.742-18.192c-5,26.231,7.357,81.733,34.05,85.7A13.947,13.947,0,0,0,529,393V287.02A99.267,99.267,0,0,0,496.6,213.329Z'
                fill='#ef7756'
              />
              <path
                d='M523.632,396.94a21.041,21.041,0,0,1-8.848-1.991c-10.128-4.663-18.09-16.814-23.666-36.116-3.06-10.6-4.542-25.73-4.412-45.046-1.942,1.209-3.93,2.4-5.948,3.576-30.786,17.875-72.726,26.689-118.084,24.821-40.227-1.658-77.576-11.963-97.475-26.892-11.185-8.393-30.876-30.057-39.631-51.944a3,3,0,0,1-.07-2.035c2.979-9.241,31.435-29.455,72.19-25.422-10.8-8.969-17.516-20.589-20.29-29.376a3,3,0,0,1,.734-3.017c13.07-13.156,39.95-20.538,70.173-19.28,24,1,46.1,7.055,63.206,17.041-3.368-7.379-5.038-15.007-4.7-19.727a3,3,0,0,1,2.906-2.787c1.392-.041,2.779-.06,4.145-.06,47.066,0,77.866,23.4,95.575,43.351A90.2,90.2,0,0,1,532,282.022V393a3,3,0,0,1-1.759,2.731A17.1,17.1,0,0,1,523.632,396.94Zm-33.847-91.691a3,3,0,0,1,3,3.064c-.456,21.1.961,37.994,4.1,48.854,6.271,21.708,14.471,29.522,20.244,32.254A14.573,14.573,0,0,0,526,390.749V282.022a84.2,84.2,0,0,0-21.056-56c-17.006-19.165-46.7-41.69-92.1-41.33.651,7.327,5.106,19.256,12.257,26.264q.879.769,1.725,1.555a3,3,0,0,1-3.957,4.508q-.906-.751-1.765-1.586c-16.782-14.61-43.873-24-73.048-25.216-27.558-1.153-51.942,5.046-64.337,16.247,3.825,10.491,13.4,24.525,28.979,32.026a3,3,0,0,1-1.976,5.626c-24.913-5.752-44.462-1.462-56.475,3.15-13.148,5.049-20.695,11.748-22.628,15.026,8.544,20.407,26.755,40.38,37.184,48.2,18.977,14.239,55.043,24.085,94.12,25.7,44.252,1.826,85.015-6.706,114.824-24.015,3.595-2.087,7.089-4.25,10.386-6.428A2.992,2.992,0,0,1,489.785,305.249Z'
                fill='#171819'
              />
              <path
                d='M451.931,330.2a3,3,0,0,1-.86-5.875,120.141,120.141,0,0,0,36.945-18.5c7.842-5.729,19-17.946,19.116-18.069a3,3,0,0,1,4.435,4.041c-.472.519-11.678,12.785-20.012,18.873a126.045,126.045,0,0,1-38.763,19.405A3,3,0,0,1,451.931,330.2Z'
                fill='#171819'
              />
              <path
                d='M370.34,398.271a2.973,2.973,0,0,1-.52-.046,104.369,104.369,0,0,0-35.964,0,3,3,0,0,1-1.031-5.91,110.276,110.276,0,0,1,38.027,0,3,3,0,0,1-.512,5.956Z'
                fill='#171819'
              />
              <circle cx='359.721' cy='409.938' r='9.153' fill='#171819' />
              <path
                d='M464.663,398.271a2.953,2.953,0,0,1-.519-.046,104.32,104.32,0,0,0-35.964,0,3,3,0,1,1-1.032-5.91,110.276,110.276,0,0,1,38.027,0,3,3,0,0,1-.512,5.956Z'
                fill='#171819'
              />
              <circle cx='454.043' cy='409.938' r='9.153' fill='#171819' />
              <path
                d='M399.36,460.866a22.345,22.345,0,0,1-19.139-10.921,3,3,0,0,1,5.162-3.058,16.233,16.233,0,0,0,27.955,0,3,3,0,1,1,5.162,3.056A22.341,22.341,0,0,1,399.36,460.866Z'
                fill='#171819'
              />
              <path
                d='M434.209,481.039c0,15.16-15.764,27.45-35.209,27.45s-35.209-12.29-35.209-27.45Z'
                fill='#fff'
              />
              <path
                d='M399,511.488c-21.068,0-38.209-13.659-38.209-30.448a3,3,0,0,1,3-3h70.418a3,3,0,0,1,3,3C437.209,497.829,420.068,511.488,399,511.488ZM367.032,484.04c1.954,12.071,15.545,21.448,31.968,21.448s30.014-9.377,31.968-21.448Z'
                fill='#171819'
              />
              <path
                d='M266.5,355.191s-23.417-1.727-23.417,22.026c0,25.312,5.855,40.879,23.417,41.5Z'
                fill='#ffdec5'
              />
              <path
                d='M266.5,421.718c-.035,0-.07,0-.106,0-23.583-.836-26.311-25.8-26.311-44.5,0-7.92,2.392-14.158,7.109-18.54,7.808-7.253,19.058-6.513,19.529-6.477a3,3,0,0,1,2.779,2.991v63.527a3,3,0,0,1-3,3Zm-3-63.467c-3.172.26-8.409,1.258-12.254,4.85-3.426,3.2-5.163,7.95-5.163,14.116,0,29.893,8.742,36.83,17.417,38.214Z'
                fill='#171819'
              />
              <path
                d='M529,355.191s23.417-1.727,23.417,22.026c0,25.312-5.855,40.879-23.417,41.5Z'
                fill='#ffdec5'
              />
              <path
                d='M529,421.718a3,3,0,0,1-3-3V355.191a3,3,0,0,1,2.779-2.991c.472-.038,11.72-.777,19.529,6.477,4.717,4.382,7.109,10.62,7.109,18.54,0,18.7-2.728,43.663-26.311,44.5C529.07,421.718,529.035,421.718,529,421.718Zm3-63.478v57.191c8.675-1.384,17.417-8.321,17.417-38.214,0-6.185-1.747-10.944-5.193-14.144C540.351,359.475,535.15,358.49,532,358.24Z'
                fill='#171819'
              />
              <path
                d='M874.25,344.6H737.278a20,20,0,0,0-20,20v74.41a20,20,0,0,0,20,20h45.713l22.773,28.4,22.773-28.4H874.25a20,20,0,0,0,20-20V364.6A20,20,0,0,0,874.25,344.6Z'
                fill='hsl(var(--p))'
              />
              <path
                d='M805.764,490.4h0a3,3,0,0,1-2.341-1.123l-21.871-27.273H737.278a23.026,23.026,0,0,1-23-23V364.6a23.026,23.026,0,0,1,23-23H874.25a23.026,23.026,0,0,1,23,23v74.41a23.026,23.026,0,0,1-23,23H829.977L808.1,489.28A3,3,0,0,1,805.764,490.4ZM737.278,347.6a17.019,17.019,0,0,0-17,17v74.41a17.019,17.019,0,0,0,17,17h45.713a3,3,0,0,1,2.341,1.123l20.432,25.478L826.2,457.13a3,3,0,0,1,2.34-1.123H874.25a17.019,17.019,0,0,0,17-17V364.6a17.019,17.019,0,0,0-17-17Z'
                fill='#171819'
              />
              <circle cx='769.02' cy='404.938' r='9.705' fill='#fff' />
              <circle cx='845.092' cy='404.938' r='9.705' fill='#fff' />
              <circle cx='807.056' cy='404.938' r='9.705' fill='#fff' />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default HeroSection;