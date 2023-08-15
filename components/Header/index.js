"use client";
import { Box, Flex, Link, Text, Image } from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
  return (
    <>
      <Flex
        as="header"
        className="header"
        align="center"
        justify="space-between"
        py={4}
        px={8}
      >
        <Box>
          <NextLink href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="236"
              height="60"
              viewBox="0 0 236 60"
              fill="none"
            >
              <path
                d="M0.000209808 20L19.8516 20L19.8516 -7.62939e-06L0.000209808 -7.62939e-06L0.000209808 20Z"
                fill="#E8CB3C"
              />
              <path
                d="M39.7029 50C39.7029 44.4771 35.2591 40 29.7773 40C24.2954 40 19.8516 44.4771 19.8516 50C19.8516 55.5228 24.2954 60 29.7773 60C35.2591 60 39.7029 55.5228 39.7029 50Z"
                fill="#0091F0"
              />
              <path
                d="M9.92587 40H0.000209808V30C0.000209808 27.3479 1.04595 24.8043 2.90737 22.9289C4.7688 21.0536 7.29342 20 9.92587 20H19.8516L19.8516 30C19.8516 32.6522 18.8058 35.1957 16.9444 37.0711C15.083 38.9464 12.5583 40 9.92587 40Z"
                fill="#E10E1A"
              />
              <path
                d="M9.92569 40H19.8514V50C19.8514 52.6522 18.8056 55.1957 16.9442 57.0711C15.0828 58.9464 12.5581 60 9.92569 60C7.29323 60 4.76859 58.9464 2.90716 57.0711C1.04574 55.1957 0 52.6522 0 50C0 47.3478 1.04574 44.8043 2.90716 42.9289C4.76859 41.0536 7.29323 40 9.92569 40Z"
                fill="#C200A9"
              />
              <path
                d="M36.79 22.9268C35.8684 21.9977 34.7739 21.2609 33.5692 20.7587C32.3645 20.2564 31.0732 19.9986 29.7694 20C28.4656 19.9986 27.1744 20.2564 25.9697 20.7587C24.7649 21.2609 23.6704 21.9977 22.7488 22.9268C21.8263 23.8551 21.0947 24.9578 20.5962 26.1716C20.0976 27.3854 19.842 28.6864 19.8438 30C19.8438 32.6522 20.8895 35.1957 22.7509 37.0711C24.6123 38.9464 27.137 40 29.7694 40C31.0734 40.0007 32.3648 39.7422 33.5695 39.2393C34.7742 38.7364 35.8686 37.999 36.79 37.0693C37.7125 36.1418 38.444 35.0398 38.9425 33.8266C39.4411 32.6135 39.6968 31.313 39.6951 30C39.6969 28.6864 39.4412 27.3854 38.9427 26.1716C38.4442 24.9578 37.7126 23.8551 36.79 22.9268Z"
                fill="#8EC300"
              />
              <path
                d="M68.7731 47.9868C67.4037 48.0067 66.0515 47.6778 64.842 47.0306C63.6785 46.3953 62.7187 45.4391 62.0752 44.2741C61.3611 42.9419 61.0073 41.4438 61.0492 39.9303V25.8575H63.7737V35.1491H63.8314C64.1651 34.5327 64.6125 33.9861 65.1494 33.5385C65.7044 33.0751 66.335 32.7122 67.0131 32.4661C67.7197 32.206 68.4666 32.0749 69.2188 32.079C70.5329 32.0573 71.8294 32.3858 72.977 33.0314C74.0828 33.6728 74.99 34.611 75.5977 35.7414C76.2628 37.0131 76.5935 38.4352 76.5584 39.8722C76.5757 41.0263 76.3803 42.1737 75.982 43.2559C75.6242 44.2173 75.0749 45.0947 74.368 45.8343C73.6769 46.5501 72.8389 47.105 71.9126 47.4603C70.9073 47.8294 69.8428 48.0079 68.7731 47.9868ZM68.7731 45.6291C69.6636 45.6389 70.5396 45.4019 71.3054 44.9439C72.0738 44.4761 72.702 43.8071 73.123 43.0081C73.5981 42.0889 73.8335 41.0631 73.807 40.0271C73.8295 39.0119 73.5997 38.0071 73.1384 37.1041C72.7234 36.3014 72.1058 35.6231 71.3477 35.1374C70.5857 34.6572 69.7025 34.4085 68.8038 34.4212C67.9132 34.4108 67.037 34.6479 66.2715 35.1065C65.5028 35.5777 64.879 36.2545 64.4693 37.0616C64.0041 37.9894 63.7743 39.0189 63.8006 40.0581C63.7751 41.0823 64.005 42.0966 64.4693 43.0081C64.881 43.8087 65.5048 44.4787 66.2715 44.9439C67.0271 45.3993 67.8926 45.6364 68.7731 45.6291Z"
                fill="white"
              />
              <path
                d="M87.0639 47.9869C85.7244 48.0201 84.4054 47.6508 83.275 46.9261C82.2066 46.2163 81.3562 45.2201 80.8195 44.0496C80.236 42.7897 79.9418 41.4135 79.9588 40.0232C79.9399 38.619 80.266 37.2319 80.9079 35.9853C81.5286 34.7898 82.4734 33.7963 83.6324 33.1204C84.9328 32.385 86.4072 32.0197 87.8978 32.0635C89.3373 32.0232 90.76 32.3835 92.0095 33.1049C93.137 33.7824 94.0541 34.764 94.6571 35.9389C95.2862 37.1726 95.6043 38.5434 95.5832 39.9303V47.6229H92.8318V44.5258H92.7703C92.4526 45.1328 92.0501 45.6908 91.5752 46.1828C91.0356 46.7323 90.3964 47.1725 89.6923 47.4797C88.8614 47.8332 87.9657 48.006 87.0639 47.9869ZM87.7748 45.6291C88.6986 45.6464 89.6075 45.3936 90.3917 44.9013C91.1597 44.4041 91.7757 43.7018 92.1709 42.8726C92.6025 41.9659 92.8195 40.9707 92.8049 39.9652C92.8204 38.9862 92.6127 38.0167 92.1978 37.1313C91.8159 36.3211 91.217 35.6346 90.4685 35.1491C89.6799 34.6503 88.7633 34.3959 87.8325 34.4174C86.8672 34.3887 85.9152 34.6487 85.0965 35.1646C84.3383 35.6577 83.7326 36.3552 83.348 37.1777C82.9319 38.0778 82.7243 39.0614 82.7409 40.0542C82.7291 41.0262 82.9312 41.9887 83.3327 42.8726C83.7078 43.6919 84.3027 44.3892 85.0504 44.8858C85.8655 45.3996 86.8137 45.6583 87.7748 45.6291Z"
                fill="white"
              />
              <path
                d="M107.723 47.9868C106.454 48.0071 105.199 47.7147 104.068 47.1351C103.025 46.5997 102.152 45.7785 101.551 44.7658C100.932 43.6886 100.619 42.4602 100.648 41.2156V32.4197H103.4V41.1885C103.379 42.0178 103.584 42.837 103.991 43.5579C104.368 44.2109 104.916 44.7467 105.575 45.1065C106.225 45.4598 106.953 45.6435 107.692 45.6407C108.441 45.6459 109.179 45.4622 109.84 45.1065C110.501 44.7449 111.052 44.2097 111.435 43.5579C111.854 42.8413 112.065 42.0201 112.042 41.1885V32.4197H114.797V41.2156C114.825 42.4621 114.507 43.6915 113.879 44.7658C113.273 45.7743 112.402 46.5943 111.362 47.1351C110.237 47.7163 108.987 48.0088 107.723 47.9868Z"
                fill="white"
              />
              <path
                d="M133.506 47.6268V34.7774H130.874V32.4197H133.506V30.1858C133.506 28.8308 133.891 27.7739 134.659 27.0074C135.428 26.2408 136.469 25.8459 137.81 25.8459H141.065V28.1998H138.344C138.063 28.1813 137.781 28.2225 137.516 28.3205C137.251 28.4185 137.01 28.5712 136.807 28.7689C136.432 29.205 136.241 29.7722 136.277 30.3484V32.4042H146.456V47.6113H143.736V34.7619H136.277V47.6113L133.506 47.6268ZM145.08 29.9458C144.84 29.9481 144.601 29.9 144.379 29.8048C144.158 29.7095 143.958 29.569 143.793 29.3922C143.618 29.2257 143.479 29.0245 143.384 28.8014C143.29 28.5782 143.242 28.3379 143.244 28.0952C143.243 27.8528 143.291 27.6126 143.386 27.3896C143.48 27.1666 143.619 26.9654 143.793 26.7983C143.959 26.6227 144.159 26.4833 144.38 26.3888C144.602 26.2942 144.84 26.2465 145.08 26.2485C145.324 26.2441 145.565 26.2907 145.789 26.3853C146.013 26.48 146.216 26.6206 146.383 26.7983C146.553 26.9679 146.687 27.17 146.779 27.3927C146.87 27.6155 146.915 27.8543 146.913 28.0952C146.916 28.3362 146.871 28.5753 146.779 28.7981C146.688 29.021 146.554 29.223 146.383 29.3922C146.217 29.5711 146.015 29.7129 145.79 29.8082C145.566 29.9036 145.324 29.9505 145.08 29.9458Z"
                fill="white"
              />
              <path
                d="M151.502 47.6268V38.8308C151.473 37.5875 151.785 36.3603 152.405 35.2846C153.004 34.2749 153.87 33.4532 154.906 32.9113C156.032 32.3315 157.282 32.0403 158.545 32.0635C159.815 32.0365 161.07 32.3278 162.2 32.9113C163.231 33.4548 164.092 34.2765 164.686 35.2846C165.306 36.3603 165.618 37.5875 165.589 38.8308V47.6268H162.869V38.8618C162.889 38.0304 162.679 37.2097 162.261 36.4924C161.877 35.8403 161.325 35.3052 160.663 34.9439C160.013 34.5893 159.285 34.4043 158.545 34.4057C157.806 34.4043 157.078 34.5893 156.428 34.9439C155.767 35.3042 155.215 35.8396 154.833 36.4924C154.414 37.209 154.204 38.0302 154.226 38.8618V47.6268H151.502Z"
                fill="white"
              />
              <path
                d="M176.925 47.9868C175.586 48.0196 174.267 47.6504 173.137 46.9261C172.068 46.2163 171.218 45.2201 170.681 44.0496C170.099 42.7894 169.806 41.4132 169.824 40.0232C169.804 38.6193 170.129 37.2322 170.769 35.9853C171.391 34.7907 172.336 33.7975 173.494 33.1204C174.793 32.3857 176.266 32.0203 177.755 32.0635C179.195 32.0228 180.618 32.3831 181.867 33.1049C182.995 33.7833 183.913 34.7645 184.519 35.9388C185.148 37.174 185.467 38.5459 185.449 39.9342V47.6268H182.697V44.5296H182.64C182.322 45.1376 181.918 45.6957 181.441 46.1866C180.902 46.7361 180.265 47.1764 179.562 47.4836C178.728 47.8359 177.829 48.0074 176.925 47.9868ZM177.636 45.6291C178.561 45.6458 179.471 45.3931 180.257 44.9013C181.023 44.4028 181.637 43.7007 182.032 42.8726C182.464 41.9659 182.681 40.9707 182.666 39.9652C182.684 38.986 182.476 38.016 182.059 37.1313C181.677 36.3211 181.079 35.6345 180.33 35.1491C179.541 34.6503 178.625 34.3959 177.694 34.4174C176.729 34.3891 175.777 34.6491 174.958 35.1645C174.2 35.6568 173.595 36.3546 173.213 37.1777C172.795 38.0772 172.588 39.0612 172.606 40.0542C172.592 41.0264 172.795 41.9894 173.198 42.8726C173.57 43.6924 174.164 44.39 174.912 44.8858C175.727 45.3996 176.675 45.6583 177.636 45.6291Z"
                fill="white"
              />
              <path
                d="M190.498 47.6268V38.8308C190.469 37.5875 190.782 36.3603 191.401 35.2846C192 34.2749 192.866 33.4532 193.903 32.9113C195.028 32.3315 196.278 32.0403 197.542 32.0635C198.812 32.0371 200.069 32.3284 201.2 32.9113C202.229 33.4559 203.089 34.2774 203.682 35.2846C204.302 36.3603 204.614 37.5875 204.585 38.8308V47.6268H201.865V38.8618C201.885 38.0304 201.675 37.2097 201.257 36.4924C200.874 35.8395 200.322 35.3041 199.659 34.9439C199.009 34.5893 198.281 34.4043 197.542 34.4057C196.804 34.4043 196.077 34.5893 195.428 34.9439C194.765 35.3041 194.213 35.8395 193.83 36.4924C193.41 37.209 193.2 38.0302 193.222 38.8618V47.6268H190.498Z"
                fill="white"
              />
              <path
                d="M216.97 47.6268C215.516 47.6535 214.079 47.3043 212.797 46.6125C211.612 45.9785 210.612 45.0445 209.895 43.9025C209.18 42.7414 208.81 41.3976 208.831 40.031C208.81 38.6643 209.179 37.3203 209.895 36.1595C210.614 35.0188 211.613 34.0851 212.797 33.4495C214.08 32.7595 215.516 32.4104 216.97 32.4352H218.745V34.7929H216.881C215.932 34.7772 214.997 35.0193 214.172 35.4936C213.386 35.9456 212.733 36.5986 212.278 37.3868C211.811 38.1907 211.571 39.1075 211.582 40.0387C211.571 40.9712 211.811 41.8893 212.278 42.6946C212.735 43.481 213.388 44.1336 214.172 44.5877C214.997 45.0603 215.933 45.3022 216.881 45.2885H218.745V47.6423L216.97 47.6268Z"
                fill="white"
              />
              <path
                d="M230.258 47.6268C228.736 47.6553 227.227 47.3349 225.846 46.6899C224.616 46.1091 223.576 45.188 222.845 44.0341C222.106 42.8312 221.729 41.4377 221.762 40.0232C221.74 38.6124 222.055 37.2169 222.68 35.9543C223.257 34.7892 224.138 33.8042 225.228 33.1049C226.363 32.397 227.678 32.0353 229.013 32.0635C230.381 32.0111 231.734 32.3638 232.905 33.0778C233.927 33.7329 234.735 34.675 235.23 35.7879C235.755 36.9957 236.017 38.3024 235.999 39.6206C235.999 39.8413 235.999 40.0697 235.999 40.3058C235.993 40.5167 235.969 40.7266 235.926 40.933H224.678C224.749 41.7961 225.068 42.6196 225.597 43.3024C226.115 43.9541 226.793 44.4584 227.564 44.7658C228.408 45.1007 229.309 45.2677 230.216 45.2575H234.151V47.6113L230.258 47.6268ZM224.632 39.0089H233.248C233.243 38.6035 233.203 38.1993 233.128 37.801C233.045 37.3676 232.906 36.9471 232.713 36.5505C232.52 36.1422 232.26 35.7693 231.945 35.4472C231.596 35.1095 231.183 34.8461 230.731 34.6729C230.187 34.4638 229.609 34.3626 229.028 34.3748C228.4 34.3552 227.777 34.488 227.211 34.7619C226.695 35.0251 226.236 35.3897 225.862 35.8343C225.489 36.2804 225.199 36.7906 225.005 37.3403C224.808 37.8775 224.683 38.4386 224.632 39.0089Z"
                fill="white"
              />
              <path
                d="M119.966 39.7909H124.02C125.011 39.7909 125.962 40.1878 126.663 40.8943C127.365 41.6007 127.759 42.5588 127.759 43.5579V47.6578H123.689C122.698 47.6578 121.746 47.2609 121.045 46.5545C120.344 45.848 119.95 44.8899 119.95 43.8908V39.7909H119.966Z"
                fill="#8EC300"
              />
            </svg>
          </NextLink>
        </Box>
        <Box align="center">
          <Text color={"accent.main"} fontSize={"0.8rem"} mb={2}>
            {" "}
            Soon
          </Text>
          <Link mx={4}>Vaults</Link>
          <Link mx={4}>Dashboard</Link>
          <Link mx={4} position="relative">
            Docs{" "}
            <svg
              style={{ position: "absolute", left: "60px", bottom: "4px" }}
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Arrow 2"
                d="M0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683418 14.0976 1.31658 14.0976 1.70711 13.7071L0.292893 12.2929ZM14 1C14 0.447716 13.5523 4.87118e-07 13 2.34237e-07L4 1.03503e-06C3.44771 6.97852e-07 3 0.447716 3 1C3 1.55229 3.44771 2 4 2L12 2L12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10L14 1ZM1.70711 13.7071L13.7071 1.70711L12.2929 0.292894L0.292893 12.2929L1.70711 13.7071Z"
                fill="white"
              />
            </svg>
          </Link>
        </Box>
        <Box display="flex" alignItems="center" gap={4}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="16" fill="#547FEF" />
            <path
              d="M15.997 2.00011L15.8076 2.63819V21.1522L15.997 21.3396L24.6609 16.2597L15.997 2.00011Z"
              fill="#BFCDFA"
            />
            <path
              d="M15.9976 2.00011L7.3335 16.2597L15.9976 21.3396V12.3534V2.00011Z"
              fill="white"
            />
            <path
              d="M15.9978 22.9667L15.8911 23.0958V29.6908L15.9978 29.9999L24.6671 17.8895L15.9978 22.9667Z"
              fill="#BFCCF9"
            />
            <path
              d="M15.9976 29.9999V22.9667L7.3335 17.8895L15.9976 29.9999Z"
              fill="white"
            />
            <path
              d="M15.9976 21.3396L24.6615 16.2597L15.9976 12.3534V21.3396Z"
              fill="#7799F2"
            />
            <path
              d="M7.3335 16.2597L15.9976 21.3396V12.3534L7.3335 16.2597Z"
              fill="#C0CDFA"
            />
          </svg>

          <Text color={"accent.yellow"} display="inline-block">
            Connect wallet{" "}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Header;
