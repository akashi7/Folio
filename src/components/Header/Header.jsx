import React from 'react'
import ArrowsDown from '../ArrowsDown/ArrowsDown'
import './Header.css'

const Header = () => {
  return (
    <header>
      <svg
        width='582'
        className='logo'
        height='212'
        viewBox='0 0 582 212'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M133.5 175.531L3.5625 115.906V101.562L133.5 33.9219V56.4219L30.1406 107.609L133.5 152.891V175.531ZM175.828 3.40625H231.938C243.938 3.40625 254.484 4.34375 263.578 6.21875C272.766 8 280.406 10.9531 286.5 15.0781C292.688 19.1094 297.328 24.4531 300.422 31.1094C303.516 37.6719 305.062 45.7812 305.062 55.4375C305.062 61.25 304.125 66.6875 302.25 71.75C300.469 76.8125 297.844 81.2656 294.375 85.1094C290.906 88.9531 286.594 92.1875 281.438 94.8125C276.375 97.3438 270.609 99.0312 264.141 99.875V101.281C270.609 102.406 276.656 104.047 282.281 106.203C288 108.266 292.969 111.172 297.188 114.922C301.406 118.578 304.734 123.219 307.172 128.844C309.609 134.469 310.828 141.312 310.828 149.375C310.828 158.75 309.281 167.141 306.188 174.547C303.188 181.859 298.781 188.094 292.969 193.25C287.25 198.312 280.266 202.203 272.016 204.922C263.766 207.641 254.438 209 244.031 209H175.828V3.40625ZM201.984 90.5938H236.297C244.172 90.5938 250.781 89.8906 256.125 88.4844C261.469 87.0781 265.781 85.0156 269.062 82.2969C272.344 79.4844 274.688 76.0156 276.094 71.8906C277.594 67.6719 278.344 62.7969 278.344 57.2656C278.344 46.0156 274.734 37.9531 267.516 33.0781C260.297 28.2031 248.906 25.7656 233.344 25.7656H201.984V90.5938ZM201.984 112.531V186.781H239.391C247.641 186.781 254.531 185.844 260.062 183.969C265.688 182.094 270.188 179.469 273.562 176.094C277.031 172.719 279.516 168.688 281.016 164C282.516 159.219 283.266 153.969 283.266 148.25C283.266 143 282.469 138.172 280.875 133.766C279.375 129.359 276.844 125.609 273.281 122.516C269.812 119.328 265.172 116.891 259.359 115.203C253.547 113.422 246.328 112.531 237.703 112.531H201.984ZM431.203 3.40625L354.703 209H329.531L406.172 3.40625H431.203ZM448.5 152.891L552 107.609L448.5 56.4219V33.9219L578.438 101.562V115.906L448.5 175.531V152.891Z'
          fill='url(#paint0_radial)'
        />
        <path
          d='M133.5 175.531L132.249 178.258C133.178 178.684 134.259 178.608 135.12 178.056C135.98 177.505 136.5 176.553 136.5 175.531H133.5ZM3.5625 115.906H0.5625C0.5625 117.079 1.24562 118.144 2.31132 118.633L3.5625 115.906ZM3.5625 101.562L2.17726 98.9015C1.18496 99.418 0.5625 100.444 0.5625 101.562H3.5625ZM133.5 33.9219H136.5C136.5 32.8734 135.953 31.901 135.056 31.3571C134.16 30.8132 133.045 30.7767 132.115 31.2608L133.5 33.9219ZM133.5 56.4219L134.831 59.1103C135.853 58.6041 136.5 57.5623 136.5 56.4219H133.5ZM30.1406 107.609L28.8092 104.921C27.7645 105.438 27.1141 106.514 27.1415 107.68C27.1688 108.845 27.8689 109.889 28.9368 110.357L30.1406 107.609ZM133.5 152.891H136.5C136.5 151.699 135.795 150.621 134.704 150.143L133.5 152.891ZM134.751 172.805L4.81368 113.18L2.31132 118.633L132.249 178.258L134.751 172.805ZM6.5625 115.906V101.562H0.5625V115.906H6.5625ZM4.94774 104.224L134.885 36.5829L132.115 31.2608L2.17726 98.9015L4.94774 104.224ZM130.5 33.9219V56.4219H136.5V33.9219H130.5ZM132.169 53.7335L28.8092 104.921L31.472 110.298L134.831 59.1103L132.169 53.7335ZM28.9368 110.357L132.296 155.638L134.704 150.143L31.3445 104.862L28.9368 110.357ZM130.5 152.891V175.531H136.5V152.891H130.5ZM175.828 3.40625V0.40625C174.171 0.40625 172.828 1.7494 172.828 3.40625H175.828ZM263.578 6.21875L262.972 9.15695C262.984 9.15933 262.996 9.16166 263.007 9.16391L263.578 6.21875ZM286.5 15.0781L284.818 17.5625C284.833 17.5723 284.848 17.5821 284.862 17.5917L286.5 15.0781ZM300.422 31.1094L297.701 32.3738C297.704 32.3788 297.706 32.3837 297.708 32.3886L300.422 31.1094ZM302.25 71.75L299.437 70.7081C299.431 70.7234 299.426 70.7388 299.42 70.7543L302.25 71.75ZM281.438 94.8125L282.779 97.4958C282.786 97.4925 282.792 97.4893 282.799 97.486L281.438 94.8125ZM264.141 99.875L263.753 96.9002C262.258 97.0951 261.141 98.3681 261.141 99.875H264.141ZM264.141 101.281H261.141C261.141 102.74 262.19 103.987 263.627 104.237L264.141 101.281ZM282.281 106.203L281.207 109.004C281.226 109.011 281.245 109.018 281.263 109.025L282.281 106.203ZM297.188 114.922L295.194 117.164C295.204 117.172 295.213 117.181 295.223 117.189L297.188 114.922ZM306.188 174.547L303.419 173.391C303.417 173.396 303.414 173.402 303.412 173.408L306.188 174.547ZM292.969 193.25L294.957 195.496L294.96 195.494L292.969 193.25ZM175.828 209H172.828C172.828 210.657 174.171 212 175.828 212V209ZM201.984 90.5938H198.984C198.984 92.2506 200.328 93.5938 201.984 93.5938V90.5938ZM269.062 82.2969L270.977 84.6069C270.989 84.5963 271.002 84.5855 271.015 84.5746L269.062 82.2969ZM276.094 71.8906L273.267 70.8856C273.263 70.8979 273.258 70.9102 273.254 70.9226L276.094 71.8906ZM201.984 25.7656V22.7656C200.328 22.7656 198.984 24.1088 198.984 25.7656H201.984ZM201.984 112.531V109.531C200.328 109.531 198.984 110.874 198.984 112.531H201.984ZM201.984 186.781H198.984C198.984 188.438 200.328 189.781 201.984 189.781V186.781ZM260.062 183.969L259.114 181.123C259.109 181.124 259.104 181.126 259.099 181.128L260.062 183.969ZM273.562 176.094L271.47 173.944C271.461 173.953 271.451 173.963 271.441 173.972L273.562 176.094ZM281.016 164L283.873 164.914C283.875 164.909 283.876 164.903 283.878 164.898L281.016 164ZM280.875 133.766L278.035 134.732C278.041 134.75 278.047 134.768 278.054 134.786L280.875 133.766ZM273.281 122.516L271.251 124.725C271.272 124.744 271.293 124.762 271.314 124.781L273.281 122.516ZM259.359 115.203L258.48 118.071C258.495 118.076 258.509 118.08 258.523 118.084L259.359 115.203ZM175.828 6.40625H231.938V0.40625H175.828V6.40625ZM231.938 6.40625C243.79 6.40625 254.126 7.33293 262.972 9.15695L264.184 3.28055C254.843 1.35457 244.085 0.40625 231.938 0.40625V6.40625ZM263.007 9.16391C271.901 10.8882 279.138 13.7171 284.818 17.5625L288.182 12.5938C281.675 8.18915 273.63 5.11177 264.149 3.27359L263.007 9.16391ZM284.862 17.5917C290.582 21.3182 294.846 26.2304 297.701 32.3738L303.142 29.8449C299.81 22.6758 294.793 16.9005 288.138 12.5645L284.862 17.5917ZM297.708 32.3886C300.562 38.4416 302.062 46.0841 302.062 55.4375H308.062C308.062 45.4784 306.469 36.9021 303.135 29.8301L297.708 32.3886ZM302.062 55.4375C302.062 60.9218 301.179 66.0038 299.437 70.7081L305.063 72.7919C307.071 67.3712 308.062 61.5782 308.062 55.4375H302.062ZM299.42 70.7543C297.766 75.4561 295.341 79.5614 292.148 83.0995L296.602 87.1193C300.347 82.9699 303.172 78.1689 305.08 72.7457L299.42 70.7543ZM292.148 83.0995C288.952 86.6408 284.944 89.6609 280.076 92.139L282.799 97.486C288.243 94.7141 292.861 91.2654 296.602 87.1193L292.148 83.0995ZM280.096 92.1292C275.375 94.4899 269.939 96.0933 263.753 96.9002L264.529 102.85C271.28 101.969 277.375 100.198 282.779 97.4958L280.096 92.1292ZM261.141 99.875V101.281H267.141V99.875H261.141ZM263.627 104.237C269.921 105.332 275.779 106.923 281.207 109.004L283.355 103.402C277.534 101.17 271.298 99.4809 264.655 98.3256L263.627 104.237ZM281.263 109.025C286.651 110.968 291.282 113.687 295.194 117.164L299.181 112.68C294.655 108.657 289.349 105.563 283.299 103.381L281.263 109.025ZM295.223 117.189C299.069 120.523 302.143 124.783 304.419 130.037L309.925 127.651C307.326 121.654 303.743 116.634 299.152 112.655L295.223 117.189ZM304.419 130.037C306.651 135.187 307.828 141.6 307.828 149.375H313.828C313.828 141.025 312.568 133.751 309.925 127.651L304.419 130.037ZM307.828 149.375C307.828 158.419 306.337 166.407 303.419 173.391L308.956 175.703C312.226 167.874 313.828 159.081 313.828 149.375H307.828ZM303.412 173.408C300.583 180.305 296.442 186.159 290.978 191.006L294.96 195.494C301.121 190.029 305.792 183.414 308.963 175.686L303.412 173.408ZM290.98 191.004C285.606 195.761 278.992 199.464 271.077 202.073L272.955 207.771C281.539 204.942 288.894 200.864 294.957 195.496L290.98 191.004ZM271.077 202.073C263.183 204.674 254.18 206 244.031 206V212C254.695 212 264.348 210.607 272.955 207.771L271.077 202.073ZM244.031 206H175.828V212H244.031V206ZM178.828 209V3.40625H172.828V209H178.828ZM201.984 93.5938H236.297V87.5938H201.984V93.5938ZM236.297 93.5938C244.33 93.5938 251.215 92.8787 256.888 91.3856L255.362 85.5832C250.348 86.9026 244.014 87.5938 236.297 87.5938V93.5938ZM256.888 91.3856C262.534 89.9 267.275 87.6738 270.977 84.6069L267.148 79.9868C264.287 82.3575 260.404 84.2563 255.362 85.5832L256.888 91.3856ZM271.015 84.5746C274.707 81.4097 277.355 77.4872 278.933 72.8586L273.254 70.9226C272.02 74.544 269.98 77.559 267.11 80.0191L271.015 84.5746ZM278.92 72.8957C280.559 68.2885 281.344 63.0617 281.344 57.2656H275.344C275.344 62.532 274.629 67.0553 273.267 70.8856L278.92 72.8957ZM281.344 57.2656C281.344 45.3438 277.476 36.1849 269.195 30.592L265.837 35.5643C271.992 39.7214 275.344 46.6874 275.344 57.2656H281.344ZM269.195 30.592C261.224 25.209 249.094 22.7656 233.344 22.7656V28.7656C248.719 28.7656 259.37 31.1973 265.837 35.5643L269.195 30.592ZM233.344 22.7656H201.984V28.7656H233.344V22.7656ZM198.984 25.7656V90.5938H204.984V25.7656H198.984ZM198.984 112.531V186.781H204.984V112.531H198.984ZM201.984 189.781H239.391V183.781H201.984V189.781ZM239.391 189.781C247.844 189.781 255.085 188.824 261.026 186.81L259.099 181.128C253.977 182.864 247.437 183.781 239.391 183.781V189.781ZM261.011 186.815C266.973 184.827 271.909 181.989 275.684 178.215L271.441 173.972C268.466 176.948 264.402 179.36 259.114 181.123L261.011 186.815ZM275.655 178.244C279.482 174.52 282.226 170.062 283.873 164.914L278.158 163.086C276.806 167.313 274.58 170.918 271.47 173.944L275.655 178.244ZM283.878 164.898C285.481 159.788 286.266 154.231 286.266 148.25H280.266C280.266 153.706 279.55 158.649 278.153 163.102L283.878 164.898ZM286.266 148.25C286.266 142.694 285.422 137.516 283.696 132.745L278.054 134.786C279.516 138.828 280.266 143.306 280.266 148.25H286.266ZM283.715 132.799C282.041 127.883 279.206 123.687 275.248 120.251L271.314 124.781C274.482 127.532 276.709 130.836 278.035 134.732L283.715 132.799ZM275.311 120.307C271.419 116.73 266.33 114.103 260.196 112.322L258.523 118.084C264.014 119.678 268.206 121.926 271.251 124.725L275.311 120.307ZM260.238 112.335C254.049 110.438 246.512 109.531 237.703 109.531V115.531C246.144 115.531 253.044 116.406 258.48 118.071L260.238 112.335ZM237.703 109.531H201.984V115.531H237.703V109.531ZM431.203 3.40625L434.015 4.45245C434.357 3.53155 434.227 2.50122 433.667 1.69432C433.106 0.887424 432.186 0.40625 431.203 0.40625V3.40625ZM354.703 209V212C355.956 212 357.078 211.221 357.515 210.046L354.703 209ZM329.531 209L326.72 207.952C326.377 208.873 326.506 209.904 327.067 210.711C327.628 211.519 328.548 212 329.531 212V209ZM406.172 3.40625V0.40625C404.919 0.40625 403.798 1.18459 403.361 2.35836L406.172 3.40625ZM428.391 2.36005L351.891 207.954L357.515 210.046L434.015 4.45245L428.391 2.36005ZM354.703 206H329.531V212H354.703V206ZM332.342 210.048L408.983 4.45414L403.361 2.35836L326.72 207.952L332.342 210.048ZM406.172 6.40625H431.203V0.40625H406.172V6.40625ZM448.5 152.891L447.298 150.142C446.206 150.62 445.5 151.699 445.5 152.891H448.5ZM552 107.609L553.202 110.358C554.271 109.89 554.972 108.846 554.999 107.68C555.027 106.514 554.375 105.437 553.33 104.92L552 107.609ZM448.5 56.4219H445.5C445.5 57.5629 446.147 58.6051 447.17 59.111L448.5 56.4219ZM448.5 33.9219L449.885 31.2608C448.955 30.7767 447.84 30.8132 446.944 31.3571C446.047 31.901 445.5 32.8734 445.5 33.9219H448.5ZM578.438 101.562H581.438C581.438 100.444 580.815 99.418 579.823 98.9015L578.438 101.562ZM578.438 115.906L579.689 118.633C580.754 118.144 581.438 117.079 581.438 115.906H578.438ZM448.5 175.531H445.5C445.5 176.553 446.02 177.505 446.88 178.056C447.741 178.608 448.822 178.684 449.751 178.258L448.5 175.531ZM449.702 155.639L553.202 110.358L550.798 104.861L447.298 150.142L449.702 155.639ZM553.33 104.92L449.83 53.7328L447.17 59.111L550.67 110.298L553.33 104.92ZM451.5 56.4219V33.9219H445.5V56.4219H451.5ZM447.115 36.5829L577.052 104.224L579.823 98.9015L449.885 31.2608L447.115 36.5829ZM575.438 101.562V115.906H581.438V101.562H575.438ZM577.186 113.18L447.249 172.805L449.751 178.258L579.689 118.633L577.186 113.18ZM451.5 175.531V152.891H445.5V175.531H451.5Z'
          fill='#EDEDED'
        />
        <defs>
          <radialGradient
            id='paint0_radial'
            cx='0'
            cy='0'
            r='1'
            gradientUnits='userSpaceOnUse'
            gradientTransform='translate(291 109.5) rotate(-1.64637) scale(417.672 748.588)'
          >
            <stop stopColor='#FF783E' />
            <stop offset='1' stopColor='#FF783E' stopOpacity='0' />
            <stop offset='1' stopColor='#FF783E' stopOpacity='0.431965' />
          </radialGradient>
        </defs>
      </svg>
      <h1>Nseko Christian</h1>
      <div className='desc'>
        <p>I am a full-stack software developer with a proven track record</p>
        <p>
          of successfully developing and deploying web an mobile applications.
        </p>
        <p>
          I am proficient in a variety of programming languages and
          technologies,
        </p>
        <p>
          including JavaScript,TypeScript,React,React native,NestJs and
          ExpressJs
        </p>
        <p>
          and have a strong understanding of both front-end and back-end
          development.
        </p>
        <p>
          I am an excellent problem solver and enjoy working in collaborative
          environments.
        </p>
      </div>
      <p>Kigali, Rwanda</p>
      <br />
      <ArrowsDown />
    </header>
  )
}

export default Header
