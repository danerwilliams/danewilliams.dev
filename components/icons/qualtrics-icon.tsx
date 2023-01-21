import { FC } from 'react';

interface QualtricsIconProps {
  className?: string;
}

export const QualtricsIcon: FC<Readonly<QualtricsIconProps>> = ({
  className,
}) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    viewBox="0 0 360 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
      d="M 313.107605 76.556053 C 312.259491 78.837608 309.847778 86.925003 307.20108 96 C 304.554382 105.074997 296.405853 130.725006 289.093231 153 C 281.780609 175.274994 275.338013 194.0625 274.776337 194.75 C 274.031036 195.662247 269.092773 196 256.5 196 C 243.907578 196 238.96875 195.662231 238.223007 194.75 C 237.66098 194.0625 231.037567 174.375 223.504303 151 C 215.971039 127.625 207.815704 101.525002 205.381332 93 C 202.946976 84.474998 200.71608 76.837608 200.423813 76.028023 L 199.89241 74.556053 L 198.961517 76.028023 C 198.415054 76.89212 198.024307 101.472885 198.01532 135.550003 C 198.003754 179.349304 197.705414 193.894592 196.800003 194.800003 C 195.913376 195.686615 186.655746 196 161.350891 196 C 127.101776 196 127.101776 196 124.657608 192.75 C 123.313316 190.962494 114.913811 177.350006 105.992043 162.5 C 97.070267 147.649994 88.922241 134.612503 87.885323 133.527771 L 86 131.555557 L 84.108826 133.527771 C 83.06868 134.612503 74.86348 148.100006 65.875053 163.5 C 56.886623 178.899994 48.533108 192.512497 47.311684 193.75 C 45.16412 195.925827 44.467087 196 26.1679 196 C 10.517927 196 7.028292 195.739014 5.992634 194.491119 C 4.955756 193.24176 5.518212 191.650848 9.26289 185.241119 C 11.75027 180.983505 19.448689 168.156433 26.370487 156.736526 C 33.292286 145.31662 44.207703 127.316612 50.626972 116.736526 C 57.228127 105.856651 62.302021 96.413963 62.306778 95 C 62.311676 93.543373 57.243343 84.256104 50.162643 72.746971 C 43.478745 61.882797 32.072411 43.4328 24.815235 31.746964 C 17.487209 19.947052 11.593609 9.388428 11.560184 8 C 11.5 5.5 11.5 5.5 33.243107 5.230515 C 54.094795 4.972076 55.058239 5.045029 56.743107 7.009857 C 57.709396 8.136719 65.104958 20.182983 73.177689 33.779343 C 81.25042 47.375702 88.521011 58.637421 89.334557 58.805389 C 90.148094 58.973358 91.922615 57.623352 93.277916 55.805389 C 94.633224 53.987427 100.820328 43.274994 107.027031 32 C 113.233734 20.725006 119.389656 10.037506 120.706863 8.25 C 123.101784 5 123.101784 5 168.928452 5 C 204.389908 5 214.981232 5.28273 215.754868 6.25 C 216.304733 6.9375 221.344849 22.800003 226.955109 41.5 C 232.565384 60.199997 241.176865 88.775002 246.091736 105 C 251.006592 121.224998 255.738953 136.06665 256.608124 137.981445 C 258.050964 141.160141 258.300507 141.309509 259.478027 139.699158 C 260.187347 138.729126 264.893768 123.331688 269.936768 105.482635 C 274.979767 87.633583 283.302032 58.121155 288.430695 39.899475 C 293.559326 21.677795 298.373016 6.377975 299.127747 5.899887 C 299.882477 5.421799 312.222504 5.023727 326.549988 5.01532 C 345.495575 5.004181 352.927277 5.327271 353.799988 6.199997 C 354.716156 7.11615 355 29.422226 355 100.5 C 355 171.577774 354.716156 193.88385 353.799988 194.800003 C 352.957581 195.642426 347.35556 196 335 196 C 322.64444 196 317.042419 195.642426 316.200012 194.800003 C 315.295074 193.895081 314.996246 179.571518 314.98468 136.550003 C 314.975708 103.090073 314.584442 78.891342 314.038483 78.028023 L 313.107605 76.556053 Z M 163.25 170.996704 C 163.662506 170.99852 164 136.125 164 93.5 C 164 50.875 163.662506 16.001038 163.25 16.002289 C 162.837494 16.003555 152.375 31.815186 140 51.139282 C 127.625 70.463364 116.41687 88.154182 115.093048 90.452217 C 112.686096 94.630463 112.686096 94.630463 137.593048 132.811935 C 151.29187 153.811752 162.837494 170.994888 163.25 170.996704 Z"
    />
  </svg>
);
