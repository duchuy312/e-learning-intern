import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {scale} from 'react-native-size-matters';

export function BackIcon(props) {
  const {color} = props;
  return (
    <Svg
      width={scale(12)}
      height={scale(21)}
      viewBox="0 0 12 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.542 2.595a1.53 1.53 0 00.05-2.128A1.446 1.446 0 009.516.415S.445 9.401.42 9.427c-.58.62-.558 1.605.048 2.199l9.046 8.957a1.445 1.445 0 002.078-.048c.56-.601.54-1.554-.047-2.128l-7.499-7.554a.5.5 0 010-.704l7.495-7.554z"
        fill={color}
      />
    </Svg>
  );
}
export function NewsIcon(props) {
  const {color} = props;
  return (
    <Svg
      width={scale(21)}
      height={scale(21)}
      viewBox="0 -19 512 512"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fill={color}
        d="M486.156 0H111.56c-14.25 0-25.84 11.594-25.84 25.844v39.23H25.844C11.594 65.074 0 76.668 0 90.918v332.539c0 27.637 22.395 50.145 49.996 50.344h.102c.09.004.172.012.261.012h265.309a7.5 7.5 0 100-15H86.184c8.98-9.098 14.535-21.59 14.535-35.356V248.07a7.5 7.5 0 10-15 0v175.387c0 19.43-15.758 35.246-35.168 35.352-.063 0-.125-.008-.192-.008C30.863 458.797 15 442.94 15 423.457V90.918c0-5.977 4.863-10.844 10.844-10.844h59.875V220.07c0 4.145 3.355 7.5 7.5 7.5a7.5 7.5 0 007.5-7.5V25.844c0-5.98 4.863-10.844 10.84-10.844h374.597C492.136 15 497 19.863 497 25.844v397.613c0 19.496-15.863 35.356-35.36 35.356H343.669a7.5 7.5 0 00-7.5 7.5c0 4.144 3.355 7.5 7.5 7.5h117.973c27.77 0 50.359-22.59 50.359-50.356V25.844C512 11.594 500.406 0 486.156 0zm0 0"
      />
      <Path
        fill={color}
        d="M164.32 299.262h102.864c9.785 0 17.746-7.961 17.746-17.746V178.652c0-9.785-7.961-17.746-17.746-17.746H164.32c-9.785 0-17.746 7.961-17.746 17.746v102.864c0 9.785 7.961 17.746 17.746 17.746zm-2.746-120.61a2.747 2.747 0 012.746-2.746h102.864a2.75 2.75 0 012.746 2.746v102.864a2.752 2.752 0 01-2.746 2.746H164.32a2.75 2.75 0 01-2.746-2.746zm0 0M312.191 175.906h139.2c4.14 0 7.5-3.355 7.5-7.5s-3.36-7.5-7.5-7.5h-139.2a7.5 7.5 0 100 15zm0 0M312.191 237.586h139.2a7.5 7.5 0 100-15h-139.2a7.5 7.5 0 100 15zm0 0M312.191 299.262h139.2a7.5 7.5 0 100-15h-139.2a7.5 7.5 0 100 15zm0 0M154.074 360.938h297.317a7.5 7.5 0 100-15H154.074a7.5 7.5 0 100 15zm0 0M154.074 422.617h297.317a7.5 7.5 0 007.5-7.5 7.5 7.5 0 00-7.5-7.5H154.074a7.5 7.5 0 00-7.5 7.5 7.5 7.5 0 007.5 7.5zm0 0M146.766 122.527v-79.25c0-1.629.773-2.87 2.32-3.722 1.547-.856 3.422-1.285 5.617-1.285 2.934 0 5.168.53 6.719 1.59 1.543 1.058 3.254 3.34 5.129 6.835l23.566 45.551v-49.09c0-1.629.774-2.847 2.32-3.664 1.543-.812 3.418-1.222 5.618-1.222 2.199 0 4.07.41 5.617 1.222 1.547.817 2.32 2.035 2.32 3.664v79.371c0 1.551-.797 2.77-2.383 3.664-1.586.899-3.437 1.344-5.554 1.344-4.317 0-7.371-1.668-9.16-5.008l-26.254-49.09v49.09c0 1.551-.793 2.77-2.38 3.664-1.585.899-3.44 1.344-5.558 1.344-2.195 0-4.07-.445-5.613-1.344-1.55-.894-2.324-2.113-2.324-3.664zm0 0M220.645 122.527v-79.25c0-1.547.69-2.765 2.078-3.664 1.382-.894 3.007-1.343 4.882-1.343h43.473c1.625 0 2.871.695 3.723 2.078.855 1.382 1.285 2.972 1.285 4.761 0 1.953-.45 3.625-1.344 5.008-.898 1.387-2.12 2.074-3.664 2.074H236.52v24.422h18.562c1.543 0 2.766.633 3.664 1.895.895 1.262 1.344 2.746 1.344 4.457 0 1.547-.43 2.95-1.285 4.215-.856 1.261-2.094 1.89-3.723 1.89H236.52v24.547h34.558c1.543 0 2.766.692 3.664 2.074.895 1.387 1.344 3.055 1.344 5.008 0 1.79-.43 3.38-1.285 4.762-.852 1.387-2.098 2.074-3.723 2.074h-43.473c-1.875 0-3.5-.445-4.882-1.34-1.387-.898-2.078-2.117-2.078-3.668zm0 0M284.023 44.621c0-1.71 1.098-3.195 3.297-4.457 2.196-1.262 4.477-1.894 6.836-1.894 2.934 0 4.684 1.058 5.25 3.175l19.297 66.188 10.379-42.496c.73-2.934 3.336-4.399 7.813-4.399 4.398 0 6.96 1.465 7.695 4.399l10.379 42.496 19.293-66.188c.57-2.117 2.32-3.175 5.254-3.175 2.359 0 4.636.632 6.836 1.894 2.199 1.262 3.296 2.746 3.296 4.457 0 .488-.082.977-.242 1.465l-24.18 76.809c-1.222 3.585-4.683 5.375-10.378 5.375-2.442 0-4.641-.47-6.594-1.407-1.953-.933-3.137-2.258-3.543-3.968l-7.813-32.97-7.937 32.97c-.41 1.71-1.59 3.035-3.543 3.968-1.953.938-4.152 1.407-6.594 1.407-2.523 0-4.762-.47-6.715-1.407-1.957-.933-3.175-2.258-3.664-3.968l-24.18-76.81a4.57 4.57 0 01-.242-1.464zm0 0M393.68 113.492c0-1.87.71-3.765 2.136-5.68 1.422-1.91 3.032-2.867 4.825-2.867 1.054 0 2.257.508 3.601 1.524a41.494 41.494 0 013.906 3.36c1.262 1.226 3.075 2.347 5.438 3.362 2.36 1.016 4.965 1.52 7.812 1.52 3.91 0 7.164-.895 9.77-2.688 2.605-1.789 3.906-4.433 3.906-7.933 0-2.445-.71-4.621-2.137-6.535-1.421-1.91-3.296-3.5-5.617-4.762-2.316-1.262-4.863-2.484-7.629-3.664a118.692 118.692 0 01-8.367-3.969c-2.808-1.465-5.37-3.113-7.691-4.945-2.32-1.832-4.196-4.274-5.617-7.328-1.426-3.051-2.137-6.532-2.137-10.438 0-4.379.875-8.246 2.625-11.59 1.75-3.347 4.09-5.949 7.02-7.808a32.847 32.847 0 019.402-4.09c3.336-.867 6.879-1.305 10.625-1.305 2.113 0 4.351.149 6.715.442 2.359.293 4.863.773 7.511 1.441 2.645.668 4.801 1.715 6.47 3.133 1.667 1.422 2.503 3.094 2.503 5.02 0 1.812-.57 3.687-1.707 5.624-1.14 1.938-2.688 2.903-4.64 2.903-.735 0-2.731-.774-5.985-2.32-3.258-1.547-6.879-2.32-10.867-2.32-4.399 0-7.797.835-10.196 2.503-2.402 1.672-3.605 3.969-3.605 6.898 0 2.364.977 4.418 2.934 6.168 1.953 1.75 4.375 3.176 7.265 4.274 2.887 1.098 6.024 2.484 9.403 4.152 3.375 1.668 6.511 3.48 9.402 5.434 2.887 1.953 5.312 4.781 7.266 8.484 1.953 3.707 2.93 8.043 2.93 13.008 0 8.348-2.669 14.793-7.997 19.328-5.336 4.535-12.355 6.805-21.066 6.805-7.735 0-14.367-1.59-19.903-4.766-5.539-3.168-8.304-6.629-8.304-10.375zm0 0"
      />
    </Svg>
  );
}
export function CourseIcon(props) {
  const {color} = props;
  return (
    <Svg
      width={scale(28)}
      height={scale(22)}
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M26.675 14.351V6.587c0-.49-.234-.924-.578-1.074L13.593.054a.627.627 0 00-.511 0L.578 5.514C.233 5.663 0 6.096 0 6.586s.233.924.578 1.074l6.26 2.733v4.29c.025 1.098.792 2.138 2.165 2.935 1.254.729 2.793 1.13 4.335 1.13 1.54 0 3.08-.401 4.334-1.13 1.396-.81 2.165-1.872 2.165-2.99v-4.235l5.171-2.257v6.214c-.778.442-1.325 1.485-1.325 2.697v3.823c0 .624.373 1.129.833 1.129h2.65c.46 0 .834-.505.834-1.129v-3.823c0-1.212-.547-2.254-1.325-2.697zm-9.92 1.337c-1.006.518-2.22.803-3.417.803-1.199 0-2.412-.285-3.418-.803-.881-.455-1.315-.946-1.416-1.153v-3.413l4.578 1.998a.64.64 0 00.511 0l4.577-1.998v3.414c-.101.207-.535.698-1.415 1.152zm-3.418-4.828L3.55 6.587l9.788-4.273 9.788 4.273-9.788 4.273zm12.996 8.883h-.984v-2.695c0-.368.221-.666.492-.666.272 0 .492.298.492.666v2.695z"
        fill={color}
      />
    </Svg>
  );
}
export function TestIcon(props) {
  const {color} = props;
  return (
    <Svg
      width={scale(21)}
      height={scale(23)}
      viewBox="0 0 22 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M10.305 24.023c0 .54-.43.977-.959.977H3.834C1.72 25 0 23.248 0 21.094V3.906C0 1.752 1.72 0 3.834 0H15.62c2.114 0 3.834 1.752 3.834 3.906v10.352c0 .54-.429.976-.958.976a.968.968 0 01-.959-.976V3.906c0-1.077-.86-1.953-1.917-1.953H3.834c-1.057 0-1.917.876-1.917 1.953v17.188c0 1.077.86 1.953 1.917 1.953h5.512c.53 0 .959.437.959.976zm11.294-8.118a.947.947 0 00-1.337.226l-4.725 6.723a.539.539 0 01-.788.042l-3.06-2.992a.946.946 0 00-1.355.028.99.99 0 00.028 1.38l3.062 2.996a2.449 2.449 0 001.863.686 2.457 2.457 0 001.79-.975l4.744-6.751a.988.988 0 00-.222-1.363zM14.661 5.86H4.788a.968.968 0 00-.959.977c0 .54.43.976.959.976h9.873c.53 0 .959-.437.959-.976 0-.54-.43-.977-.959-.977zm.959 4.883c0-.54-.43-.976-.959-.976H4.788a.968.968 0 00-.959.976c0 .54.43.977.959.977h9.873c.53 0 .959-.437.959-.977zm-10.832 2.93a.968.968 0 00-.959.976c0 .54.43.977.959.977h5.996c.53 0 .959-.437.959-.977 0-.539-.43-.976-.959-.976H4.788z"
        fill={color}
      />
    </Svg>
  );
}
export function UserIcon(props) {
  const {color} = props;
  return (
    <Svg
      width={scale(22)}
      height={scale(22)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20.43 15.472a11.922 11.922 0 00-4.548-2.852 6.916 6.916 0 003.004-5.702A6.926 6.926 0 0011.967 0 6.926 6.926 0 005.05 6.918a6.916 6.916 0 003.004 5.702 11.921 11.921 0 00-4.548 2.852A11.889 11.889 0 000 23.934h1.87c0-5.567 4.53-10.097 10.097-10.097 5.568 0 10.097 4.53 10.097 10.097h1.87a11.89 11.89 0 00-3.505-8.462zm-8.463-3.505a5.054 5.054 0 01-5.049-5.049 5.054 5.054 0 015.05-5.048 5.054 5.054 0 015.048 5.048 5.054 5.054 0 01-5.049 5.05z"
        fill={color}
      />
    </Svg>
  );
}
export function BuildingIcon(props) {
  const {color} = props;
  return (
    <Svg
      height={scale(18)}
      viewBox="0 0 496 496"
      width={scale(20)}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fill={color}
        d="M434 464h-32V72c0-8.836-7.163-16-16-16H266V16c0-8.836-7.163-16-16-16H139c-8.836 0-16 7.164-16 16v40h-13c-8.836 0-16 7.164-16 16v392H62c-8.836 0-16 7.164-16 16s7.164 16 16 16h372c8.837 0 16-7.164 16-16s-7.163-16-16-16zM155 32h79v24h-79zm61 432v-68h64v68zm96 0v-68h7c8.837 0 16-7.164 16-16s-7.163-16-16-16H177c-8.836 0-16 7.164-16 16s7.164 16 16 16h7v68h-58V88h244v376zm-87-329c0 8.836-7.164 16-16 16h-18c-8.836 0-16-7.164-16-16s7.164-16 16-16h18c8.836 0 16 7.164 16 16zm95 0c0 8.836-7.163 16-16 16h-18c-8.837 0-16-7.164-16-16s7.163-16 16-16h18c8.837 0 16 7.164 16 16zm-95 60c0 8.836-7.164 16-16 16h-18c-8.836 0-16-7.164-16-16s7.164-16 16-16h18c8.836 0 16 7.164 16 16zm95 0c0 8.836-7.163 16-16 16h-18c-8.837 0-16-7.164-16-16s7.163-16 16-16h18c8.837 0 16 7.164 16 16zm-95 60c0 8.836-7.164 16-16 16h-18c-8.836 0-16-7.164-16-16s7.164-16 16-16h18c8.836 0 16 7.164 16 16zm95 0c0 8.836-7.163 16-16 16h-18c-8.837 0-16-7.164-16-16s7.163-16 16-16h18c8.837 0 16 7.164 16 16zm-95 60c0 8.836-7.164 16-16 16h-18c-8.836 0-16-7.164-16-16s7.164-16 16-16h18c8.836 0 16 7.164 16 16zm95 0c0 8.836-7.163 16-16 16h-18c-8.837 0-16-7.164-16-16s7.163-16 16-16h18c8.837 0 16 7.164 16 16z"
      />
    </Svg>
  );
}
export function ClockIcon(props) {
  const {clockheight, clockwidth} = props;
  return (
    <Svg
      height={clockheight}
      width={clockwidth}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.001 512.001"
      {...props}>
      <Path
        fillRule="evenodd"
        fill="white"
        d="M256.017 121.493c-39.609 0-76.892 13.013-107.816 37.633-30.004 23.887-51.493 57.451-60.509 94.51-1.305 5.366 1.986 10.775 7.353 12.081 5.365 1.303 10.774-1.986 12.081-7.353 16.741-68.812 77.968-116.871 148.892-116.871 84.491 0 153.229 68.738 153.229 153.229s-68.738 153.229-153.229 153.229c-71.594 0-132.953-48.616-149.215-118.225-1.257-5.378-6.635-8.72-12.013-7.463-5.378 1.256-8.719 6.635-7.463 12.013 8.743 37.424 30.15 71.363 60.279 95.565 30.593 24.576 69.094 38.11 108.412 38.11 95.519 0 173.229-77.71 173.229-173.229s-77.711-173.229-173.23-173.229z"
      />
      <Path
        fillRule="evenodd"
        fill="#ffc107"
        d="M489.249 66.953l-16.571-16.571C457.993 35.697 438.468 27.61 417.7 27.61s-40.292 8.088-54.977 22.773c-3.905 3.905-3.905 10.237 0 14.142l35.315 35.315-17.079 17.079c-33.644-23.749-73.231-37.345-114.943-39.222V60h21.266c16.542 0 30-13.458 30-30s-13.458-30-30-30h-62.531c-16.542 0-30 13.458-30 30s13.458 30 30 30h21.266v17.697c-41.711 1.877-81.298 15.473-114.941 39.22L113.999 99.84l35.315-35.315c3.905-3.905 3.905-10.237 0-14.142-14.685-14.685-34.209-22.773-54.977-22.773s-40.292 8.087-54.978 22.773l-16.57 16.571C8.104 81.638.016 101.163.016 121.93s8.088 40.292 22.772 54.978a10.001 10.001 0 0014.142 0l34.765-34.765 15.636 15.636c-31.464 38.61-48.574 86.46-48.574 136.944 0 49.704 16.592 96.851 47.132 135.144a92260.72 92260.72 0 00-18.378 30.355A31615.45 31615.45 0 0052.346 485.3a5779.44 5779.44 0 00-5.005 8.301c-2.752 4.577-3.325 5.529-3.325 8.332 0 2.66 1.06 5.211 2.945 7.088 2.97 2.957 4.991 2.961 12.513 2.977a3590.449 3590.449 0 0011.949-.008c8.656-.02 17.292-.058 17.292-.058a10 10 0 007.578-3.527l32.111-37.812c36.865 26.869 81.121 41.387 127.613 41.387s90.747-14.518 127.612-41.387l32.111 37.812a9.998 9.998 0 007.578 3.527s8.636.038 17.292.058c2.915.006 5.83.011 8.421.011 1.266 0 2.455-.001 3.528-.003 7.521-.016 9.543-.021 12.513-2.977a10.004 10.004 0 002.945-7.088c0-2.803-.573-3.755-3.325-8.332a5779.44 5779.44 0 00-5.005-8.301 31615.45 31615.45 0 00-15.165-25.078c-7.115-11.757-14.226-23.499-18.378-30.355 30.541-38.293 47.132-85.44 47.132-135.144 0-50.483-17.109-98.332-48.572-136.941l15.638-15.638 34.765 34.765a10.002 10.002 0 0014.143 0c30.313-30.316 30.313-79.641-.001-109.956zM224.751 40c-5.514 0-10-4.486-10-10s4.486-10 10-10h62.531c5.514 0 10 4.486 10 10s-4.486 10-10 10h-62.531zM64.626 120.927l-.002.002-.002.002-34.156 34.157c-6.791-9.644-10.45-21.12-10.45-33.158 0-15.425 6.007-29.927 16.915-40.835l16.571-16.571C64.76 53.266 79.548 47.637 94.337 47.637c11.622 0 23.243 3.476 33.151 10.429l-34.7 34.7-.003.003-.003.003-28.156 28.155zM85.839 128l14.018-14.018 15.314 15.314a221.552 221.552 0 00-12.779 11.801c-.577.577-1.137 1.166-1.707 1.749L85.839 128zm-1.811 363.952c-3.927.015-8.252.029-12.356.038 7.451-12.33 18.353-30.342 28.059-46.369.882.912 1.761 1.827 2.661 2.726a222.395 222.395 0 0010.4 9.734l-28.764 33.871zm356.333.038c-4.103-.009-8.43-.023-12.356-.038l-28.764-33.871a222.416 222.416 0 0010.401-9.734c.9-.9 1.779-1.814 2.661-2.726a63576.436 63576.436 0 0128.058 46.369zm12.914-197.268c0 108.769-88.49 197.258-197.258 197.258-108.769 0-197.258-88.49-197.258-197.258 0-108.769 88.49-197.259 197.258-197.259s197.258 88.49 197.258 197.259zm-41.924-151.874c-.571-.583-1.131-1.173-1.709-1.751a221.792 221.792 0 00-12.776-11.799l15.316-15.316L426.199 128l-14.848 14.848zm70.214 12.234l-34.149-34.15-.003-.003-.003-.003-28.156-28.156-.001-.001-.002-.002-34.708-34.708c9.644-6.791 21.12-10.45 33.158-10.45 15.425 0 29.928 6.007 40.835 16.915l16.571 16.571c20.106 20.106 22.259 51.47 6.458 73.987z"
      />
      <Path
        fillRule="evenodd"
        fill="#ffc107"
        d="M256.017 260.023c-5.936 0-11.527 1.5-16.418 4.138l-40.682-40.682c-3.905-3.905-10.237-3.905-14.143 0-3.905 3.905-3.905 10.237 0 14.143l40.682 40.682a34.485 34.485 0 00-4.139 16.418c0 15.657 10.427 28.92 24.699 33.224v94.387c.001 5.523 4.478 10 10.001 10s10-4.477 10-10v-94.387c14.273-4.304 24.699-17.567 24.699-33.224 0-19.133-15.566-34.699-34.699-34.699zm-.001 49.398c-8.105 0-14.699-6.594-14.699-14.699s6.594-14.699 14.699-14.699 14.699 6.594 14.699 14.699-6.594 14.699-14.699 14.699zM356.914 224.843c-3.148-4.538-9.379-5.664-13.917-2.516-4.538 3.148-5.664 9.379-2.516 13.917 11.944 17.217 18.258 37.438 18.258 58.479 0 5.523 4.477 10 10 10s10-4.477 10-10c0-25.136-7.547-49.299-21.825-69.88zM375.806 324.93c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21 1.07-7.07 2.93-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07c1.86 1.86 4.44 2.93 7.07 2.93s5.21-1.07 7.07-2.93c1.86-1.86 2.93-4.44 2.93-7.07s-1.07-5.21-2.93-7.07zM99.856 287.65c-1.86-1.86-4.44-2.93-7.07-2.93s-5.21 1.07-7.07 2.93-2.93 4.44-2.93 7.07 1.07 5.21 2.93 7.07 4.44 2.93 7.07 2.93 5.211-1.07 7.07-2.93c1.86-1.86 2.93-4.44 2.93-7.07s-1.07-5.21-2.93-7.07z"
      />
    </Svg>
  );
}
export function AuthorIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={scale(12)}
      height={scale(12)}
      viewBox="0 0 425.963 425.963"
      {...props}>
      <Path
        fill="gray"
        d="M213.285 0h-.608C139.114 0 79.268 59.826 79.268 133.361c0 48.202 21.952 111.817 65.246 189.081 32.098 57.281 64.646 101.152 64.972 101.588a4.8 4.8 0 003.847 1.934c.043 0 .087 0 .13-.002a4.805 4.805 0 003.868-2.143c.321-.486 32.637-49.287 64.517-108.976 43.03-80.563 64.848-141.624 64.848-181.482C346.693 59.825 286.846 0 213.285 0zm61.58 136.62c0 34.124-27.761 61.884-61.885 61.884-34.123 0-61.884-27.761-61.884-61.884s27.761-61.884 61.884-61.884c34.124 0 61.885 27.761 61.885 61.884z"
      />
    </Svg>
  );
}
export function CalendarIcon(props) {
  return (
    <Svg
      height={scale(14)}
      width={scale(12)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 477.867 477.867"
      {...props}>
      <Path
        fill="#ffc107"
        d="M119.467 0C110.041 0 102.4 7.641 102.4 17.067V51.2h34.133V17.067C136.533 7.641 128.892 0 119.467 0zM358.4 0c-9.426 0-17.067 7.641-17.067 17.067V51.2h34.133V17.067C375.467 7.641 367.826 0 358.4 0zM426.667 51.2h-51.2v68.267c0 9.426-7.641 17.067-17.067 17.067s-17.067-7.641-17.067-17.067V51.2h-204.8v68.267c0 9.426-7.641 17.067-17.067 17.067s-17.067-7.641-17.067-17.067V51.2H51.2C22.923 51.2 0 74.123 0 102.4v324.267c0 28.277 22.923 51.2 51.2 51.2h375.467c28.277 0 51.2-22.923 51.2-51.2V102.4c0-28.277-22.923-51.2-51.2-51.2zm17.066 375.467c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V204.8h409.6v221.867z"
      />
      <Path
        fill="#ffc107"
        d="M353.408 243.942c-6.664-6.669-17.472-6.672-24.141-.009L204.8 368.401 148.599 312.2c-6.669-6.664-17.477-6.66-24.141.009-6.664 6.669-6.66 17.477.009 24.141l68.267 68.267c6.665 6.663 17.468 6.663 24.132 0L353.4 268.083c6.668-6.664 6.672-17.472.008-24.141z"
      />
    </Svg>
  );
}
export function FlagTickIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={18}
      viewBox="0 0 561 561"
      {...props}>
      <Path
        fill="#ffc107"
        d="M459 0H102C73.95 0 51 22.95 51 51v328.95c0 17.85 7.65 33.149 22.95 43.35L280.5 561l206.55-137.7C499.8 413.1 510 397.8 510 379.95V51c0-28.05-22.95-51-51-51zM229.5 382.5L102 255l35.7-35.7 91.8 91.8 193.8-193.8L459 153 229.5 382.5z"
      />
    </Svg>
  );
}
export function DateAndTimeIcon(props) {
  return (
    <Svg
      height={16}
      viewBox="0 0 512 512"
      width={16}
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fill="black"
        d="M391.017 251.454h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm-.357 145h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zm-102.273-45h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zM120.983 372H85.269c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643zm-.357 50h-35v-35h35zm.357-235.546H85.269c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.075-6.569-14.643-14.643-14.643zm-.357 50h-35v-35h35zm168.475 107.773h35.714c8.074 0 14.643-6.569 14.643-14.643V293.87c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zM448.823 34.274h-32.066V22.807C416.757 10.231 406.526 0 393.95 0h-3.444C377.931 0 367.7 10.231 367.7 22.807v11.467H144.3V22.807C144.3 10.231 134.069 0 121.493 0h-3.444c-12.576 0-22.807 10.231-22.807 22.807v11.467H63.177c-20.705 0-37.55 16.845-37.55 37.55V474.5c0 20.678 16.822 37.5 37.5 37.5h385.748c20.678 0 37.5-16.822 37.5-37.5V71.824c-.001-20.705-16.846-37.55-37.552-37.55zM382.7 22.807c0-4.305 3.502-7.807 7.807-7.807h3.444c4.305 0 7.807 3.502 7.807 7.807v11.467H382.7zm-272.457 0c0-4.305 3.502-7.807 7.807-7.807h3.444c4.305 0 7.807 3.502 7.807 7.807v11.467h-19.057V22.807zM471.374 474.5c0 12.407-10.093 22.5-22.5 22.5H63.126c-12.407 0-22.5-10.093-22.5-22.5v-.047A37.354 37.354 0 0063.177 482H367.26c10.03 0 19.46-3.906 26.552-10.999l77.562-77.562zm-85.215-17.059c.588-2.427.908-4.958.908-7.563v-50.064c0-9.44 7.681-17.121 17.122-17.121h50.063c2.605 0 5.136-.32 7.563-.908zm85.215-315.987H151.8a7.5 7.5 0 000 15h319.574v194.118c0 9.441-7.681 17.122-17.122 17.122h-50.063c-17.712 0-32.122 14.41-32.122 32.121v50.064c0 9.441-7.681 17.122-17.121 17.122H63.177c-12.434 0-22.55-10.116-22.55-22.551V156.454H121.8a7.5 7.5 0 000-15H40.626v-69.63c0-12.434 10.116-22.55 22.55-22.55h32.066v22.052c0 12.576 10.231 22.807 22.807 22.807a7.5 7.5 0 000-15c-4.305 0-7.807-3.502-7.807-7.807V49.274H367.7v22.052c0 12.576 10.231 22.807 22.807 22.807a7.5 7.5 0 000-15c-4.305 0-7.807-3.502-7.807-7.807V49.274h66.124c12.434 0 22.55 10.116 22.55 22.55zM120.983 279.227H85.269c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643h35.714c8.074 0 14.643-6.569 14.643-14.643V293.87c0-8.075-6.569-14.643-14.643-14.643zm-.357 50h-35v-35h35zm66.559-77.773h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zM289.449 422a7.5 7.5 0 00-14.992.357c0 8.074 6.569 14.643 14.643 14.643h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643H289.1c-8.074 0-14.643 6.569-14.643 14.643v10.3a7.5 7.5 0 0015 0V387h35v35zm-102.264-77.773h35.714c8.074 0 14.643-6.569 14.643-14.643V293.87c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35zM187.185 437h35.714c8.074 0 14.643-6.569 14.643-14.643v-35.714c0-8.074-6.569-14.643-14.643-14.643h-35.714c-8.074 0-14.643 6.569-14.643 14.643v35.714c0 8.074 6.569 14.643 14.643 14.643zm.357-50h35v35h-35z"
      />
    </Svg>
  );
}
export function CircleCheckIcon(props) {
  return (
    <Svg
      height={scale(70)}
      width={scale(70)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 477.867 477.867"
      {...props}>
      <Path
        fill="#d3eed4"
        d="M238.933 0C106.974 0 0 106.974 0 238.933s106.974 238.933 238.933 238.933 238.933-106.974 238.933-238.933C477.726 107.033 370.834.141 238.933 0zm0 443.733c-113.108 0-204.8-91.692-204.8-204.8s91.692-204.8 204.8-204.8 204.8 91.692 204.8 204.8c-.122 113.058-91.742 204.678-204.8 204.8z"
      />
      <Path
        fill="#35ff3d"
        d="M370.046 141.534c-6.614-6.388-17.099-6.388-23.712 0l-158.601 158.6-56.201-56.201c-6.548-6.78-17.353-6.967-24.132-.419-6.78 6.548-6.967 17.353-.419 24.132.137.142.277.282.419.419l68.267 68.267c6.664 6.663 17.468 6.663 24.132 0l170.667-170.667c6.548-6.779 6.36-17.583-.42-24.131z"
      />
    </Svg>
  );
}
export function StarIcon(props) {
  const {color, color1} = props;
  return (
    <Svg
      height={15}
      width={15}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.001 512.001"
      {...props}>
      <Path
        d="M499.92 188.26l-165.839-15.381L268.205 19.91c-4.612-10.711-19.799-10.711-24.411 0l-65.875 152.97L12.08 188.26c-11.612 1.077-16.305 15.52-7.544 23.216l125.126 109.922-36.618 162.476c-2.564 11.376 9.722 20.302 19.749 14.348L256 413.188l143.207 85.034c10.027 5.954 22.314-2.972 19.75-14.348l-36.619-162.476 125.126-109.922c8.761-7.696 4.068-22.139-7.544-23.216z"
        fill={color}
      />
      <Path
        d="M268.205 19.91c-4.612-10.711-19.799-10.711-24.411 0l-65.875 152.97L12.08 188.26c-11.612 1.077-16.305 15.52-7.544 23.216l125.126 109.922-36.618 162.476c-2.564 11.376 9.722 20.302 19.749 14.348l31.963-18.979c4.424-182.101 89.034-310.338 156.022-383.697L268.205 19.91z"
        fill={color1}
      />
    </Svg>
  );
}
export function SendIcon(props) {
  return (
    <Svg
      height={30}
      width={30}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488.721 488.721"
      {...props}>
      <Path
        fill="white"
        d="M483.589 222.024a51.197 51.197 0 00-23.762-23.762L73.522 11.331C48.074-.998 17.451 9.638 5.122 35.086A51.2 51.2 0 003.669 76.44l67.174 167.902L3.669 412.261c-10.463 26.341 2.409 56.177 28.75 66.639a51.314 51.314 0 0018.712 3.624c7.754 0 15.408-1.75 22.391-5.12l386.304-186.982c25.45-12.326 36.089-42.949 23.763-68.398zM58.657 446.633c-8.484 4.107-18.691.559-22.798-7.925a17.065 17.065 0 01-.481-13.784l65.399-163.516h340.668L58.657 446.633zm42.121-219.358L35.379 63.759a16.64 16.64 0 014.215-18.773 16.537 16.537 0 0119.063-2.884l382.788 185.173H100.778z"
      />
    </Svg>
  );
}
export function DownloadIcon(props) {
  return (
    <Svg
      width={scale(25)}
      height={scale(25)}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7 1C7 0.447716 7.44772 0 8 0C8.55228 0 9 0.447715 9 1V8.15777L12.2428 4.91501L13.657 6.32922L8.00012 11.9861L2.34326 6.32922L3.75748 4.91501L7 8.15753V1Z"
        fill="#144E8C"
      />
      <Path
        d="M0 10H2V14H14V10H16V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V10Z"
        fill="#144E8C"
      />
    </Svg>
  );
}
export function CameraIcon(props) {
  return (
    <Svg
      width={scale(18)}
      height={scale(18)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 471.04 471.04"
      {...props}>
      <Path
        fill="#cecece"
        d="M414.72 112.64h-49.152l-27.136-40.96c-10.24-15.36-28.16-24.576-46.592-24.576H179.2c-18.432 0-36.352 9.216-46.592 24.576l-27.136 40.96H56.32A56.158 56.158 0 000 168.96v198.656a56.158 56.158 0 0056.32 56.32h358.4a56.158 56.158 0 0056.32-56.32V168.96a56.158 56.158 0 00-56.32-56.32zm-179.2 265.216c-70.144 0-126.976-56.832-126.976-126.976s56.832-126.464 126.976-126.464 126.976 56.832 126.976 126.976c0 69.632-56.832 126.464-126.976 126.464zM407.552 192h-22.528c-9.216-.512-16.384-8.192-15.872-17.408.512-8.704 7.168-15.36 15.872-15.872h20.48c9.216-.512 16.896 6.656 17.408 15.872.512 9.216-6.144 16.896-15.36 17.408z"
      />
      <Path
        fill="#cecece"
        d="M235.52 180.736c-38.912 0-70.656 31.744-70.656 70.656s31.744 70.144 70.656 70.144 70.656-31.744 70.656-70.656c0-38.912-31.744-70.144-70.656-70.144z"
      />
    </Svg>
  );
}
