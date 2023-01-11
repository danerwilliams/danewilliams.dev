import { FC } from 'react';

interface SymetraIconProps {
  className?: string;
}

export const SymetraIcon: FC<Readonly<SymetraIconProps>> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 280 160"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      clip-rule="evenodd"
      stroke="none"
      d="M 11.974562 156 C 11.023241 156 9.687445 155.328323 9.006123 154.50737 C 7.987054 153.27948 8.494139 151.855606 11.865299 146.478943 C 14.119169 142.884232 20.359015 134.963333 25.731621 128.876923 C 31.104229 122.79052 37.751331 115.065483 40.502956 111.710182 C 43.254581 108.354881 47.979584 103.662384 51.002956 101.28241 C 54.026329 98.902435 60.550003 93.892769 65.5 90.149826 C 70.449997 86.406883 77.875 81.332108 82 78.872559 C 86.125 76.413002 92.650002 72.784004 96.5 70.808113 C 100.349998 68.832222 107.934921 65.566956 113.355377 63.551971 C 118.775826 61.53698 127.408737 58.797623 132.539597 57.464516 C 137.670471 56.131401 145.160553 54.545486 149.184235 53.940262 C 153.207901 53.335037 157.529373 52.427841 158.787506 51.924271 C 160.63884 51.183273 160.884796 50.653259 160.077423 49.144653 C 159.528732 48.119446 156.81015 46.304245 154.036118 45.110886 C 151.262085 43.917526 144.7742 41.845154 139.618622 40.50563 C 133.740219 38.978287 125.668839 37.811493 117.973152 37.376572 C 111.22374 36.995132 99.131157 36.49472 91.100746 36.264542 C 83.070335 36.034348 65.699997 35.768173 52.5 35.673019 C 28.5 35.5 28.5 35.5 28.5 33.004364 C 28.5 31.008759 29.246029 30.264313 32.223316 29.28891 C 34.271137 28.618027 40.796139 26.916412 46.723316 25.507568 C 52.65049 24.098724 59.412636 22.508545 61.750298 21.973831 C 64.087967 21.439117 68.587967 20.365921 71.750298 19.588959 C 74.912636 18.811996 81.099998 17.461456 85.5 16.587769 C 89.900002 15.714081 95.525002 14.554855 98 14.011703 C 100.474998 13.468567 109.849304 11.686935 118.831787 10.052521 C 127.81427 8.418121 139.739258 6.500183 145.331787 5.790436 C 150.924301 5.080704 162.74968 4.525558 171.610397 4.556793 C 180.894165 4.589523 190.216446 5.1633 193.610397 5.910873 C 196.84967 6.624374 202.73114 8.558411 206.680313 10.208725 C 211.058746 12.038422 215.624557 14.899429 218.380997 17.540573 C 220.867203 19.922775 224.048553 24.135712 225.450684 26.902679 C 227.151764 30.259613 228 33.563843 228 36.833405 C 228 39.595673 227.049988 44.019272 225.822372 46.973267 C 224.298965 50.638962 223.934982 52.67337 224.610825 53.744797 C 225.142166 54.587166 229.70343 56.710747 234.746948 58.463875 C 239.790482 60.217003 247.082764 63.756462 250.952026 66.329346 C 256.462921 69.993851 258.681793 72.238358 261.193909 76.68959 C 262.957703 79.814835 265.922882 84.365921 267.783234 86.803101 C 270.104462 89.844078 270.842438 91.557579 270.135376 92.264618 C 269.47821 92.921791 265.917358 93.050156 260.302551 92.619087 C 255.461151 92.247391 247.899994 91.265137 243.5 90.436302 C 239.100006 89.607475 229.649994 88.382736 222.5 87.714668 C 215.350006 87.0466 202.300003 86.5 193.5 86.5 C 184.699997 86.5 172.324997 87.041748 166 87.70388 C 159.675003 88.366013 150.449997 89.596039 145.5 90.437271 C 140.550003 91.278503 133.125 92.571144 129 93.309799 C 124.875 94.048454 116.324997 96.13427 110 97.944939 C 103.675003 99.755608 94 103.014915 88.5 105.187836 C 83 107.360756 74.687561 111.188766 70.027916 113.694519 C 65.368271 116.200272 57.055679 121.170715 51.555504 124.739944 C 46.055325 128.309189 36.707146 135.790344 30.78178 141.364731 C 24.856411 146.939133 18.589949 152.512497 16.856308 153.75 C 15.122667 154.987503 12.92588 156 11.974562 156 Z"
    />
  </svg>
);
