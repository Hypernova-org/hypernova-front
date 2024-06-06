"use client";
import React, { useState, useRef, ChangeEvent } from "react";
import PrimaryBtn from "../components/buttons/PrimaryBtn";
import Modal from "../components/Modal";

const Vacancies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      // onChange(event.target.files);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="page-wrapper px-[6%] pt-[80px] lg:mb-[201px] xs:mb-[150px]">
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="lg:text-[20px] sm:text-[16px] xs:text-[14px] font-[400] lg:mb-[14px] xs:mb-[10px]">Full name</p>
        <input
          type="text"
          placeholder="Enter full name"
          className="rounded-[12px] lg:w-[400px] xs:w-[300px] px-[12px] py-[15px] bg-[#3C096C] lg:mb-[40px] sm:mb-[35px] xs:mb-[25px] outline-none"
        />
        <p className="lg:text-[20px] sm:text-[16px] xs:text-[14px] font-[400] lg:mb-[14px] xs:mb-[10px]">Your phone number</p>
        <input
          type="phone"
          placeholder="Enter phone number"
          className="rounded-[12px] lg:w-[400px] xs:w-[300px] px-[12px] py-[15px] bg-[#3C096C] lg:mb-[40px] sm:mb-[35px] xs:mb-[25px] outline-none"
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleInputChange}
          className="hidden"
        />
        <button
          className="rounded-[12px] lg:w-[400px] xs:w-[300px] px-[20px] py-[12px] bg-[#3C096C] mb-[40px] flex items-center justify-between lg:mb-[76px] sm:mb-[55px] xs:mb-[45px]"
          onClick={handleClick}
        >
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M15.4123 26.6749C14.0498 26.6749 12.6873 26.1625 11.6498 25.125C9.5748 23.05 9.5748 19.6875 11.6498 17.6125L14.7498 14.525C15.1123 14.1625 15.7123 14.1625 16.0748 14.525C16.4373 14.8875 16.4373 15.4875 16.0748 15.85L12.9748 18.9375C11.6373 20.275 11.6373 22.4625 12.9748 23.8C14.3123 25.1375 16.4998 25.1375 17.8373 23.8L22.6998 18.9375C24.1748 17.4625 24.9873 15.5 24.9873 13.4125C24.9873 11.325 24.1748 9.36245 22.6998 7.88745C19.6498 4.83745 14.6998 4.83745 11.6498 7.88745L6.3498 13.1875C5.1123 14.425 4.4248 16.075 4.4248 17.825C4.4248 19.575 5.1123 21.225 6.3498 22.4625C6.7123 22.825 6.7123 23.425 6.3498 23.7875C5.9873 24.15 5.3873 24.15 5.0248 23.7875C3.4373 22.1875 2.5498 20.075 2.5498 17.825C2.5498 15.575 3.4248 13.45 5.0248 11.8625L10.3248 6.56245C14.0998 2.78745 20.2498 2.78745 24.0248 6.56245C25.8498 8.38745 26.8623 10.825 26.8623 13.4125C26.8623 16 25.8498 18.4375 24.0248 20.2625L19.1623 25.125C18.1248 26.1625 16.7748 26.6749 15.4123 26.6749Z"
                fill="#FBFAFF"
              />
            </svg>
           <p className="ml-[12px]"> upload your CV</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M26.9392 18.0938C26.6905 18.0938 26.4521 18.1925 26.2762 18.3683C26.1004 18.5442 26.0017 18.7826 26.0017 19.0312V22.2328C26.0017 22.9874 25.7019 23.7112 25.1683 24.2448C24.6347 24.7784 23.911 25.0781 23.1563 25.0781H6.84385C6.08922 25.0781 5.36551 24.7784 4.83191 24.2448C4.29831 23.7112 3.99853 22.9874 3.99853 22.2328V19.0312C3.99853 18.7826 3.89976 18.5442 3.72395 18.3683C3.54813 18.1925 3.30968 18.0938 3.06104 18.0938C2.81239 18.0938 2.57394 18.1925 2.39812 18.3683C2.22231 18.5442 2.12354 18.7826 2.12354 19.0312V22.2328C2.12478 23.4843 2.62249 24.6842 3.50745 25.5692C4.39241 26.4542 5.59232 26.9519 6.84385 26.9531H23.1563C24.4079 26.9519 25.6078 26.4542 26.4927 25.5692C27.3777 24.6842 27.8754 23.4843 27.8767 22.2328V19.0312C27.8767 18.7826 27.7779 18.5442 27.6021 18.3683C27.4263 18.1925 27.1878 18.0938 26.9392 18.0938Z"
              fill="#FBFAFF"
            />
            <path
              d="M14.3346 20.8312C14.4218 20.9191 14.5254 20.9889 14.6397 21.0365C14.7539 21.0841 14.8765 21.1086 15.0002 21.1086C15.124 21.1086 15.2465 21.0841 15.3608 21.0365C15.475 20.9889 15.5787 20.9191 15.6659 20.8312L21.0002 15.4969C21.1491 15.3178 21.2259 15.0897 21.2158 14.8571C21.2057 14.6244 21.1094 14.4038 20.9457 14.2383C20.7819 14.0728 20.5623 13.9741 20.3298 13.9615C20.0973 13.949 19.8684 14.0234 19.6877 14.1703L15.9377 17.9203V3.98437C15.9377 3.73573 15.839 3.49728 15.6631 3.32146C15.4873 3.14565 15.2489 3.04688 15.0002 3.04688C14.7516 3.04688 14.5131 3.14565 14.3373 3.32146C14.1615 3.49728 14.0627 3.73573 14.0627 3.98437V17.9062L10.3127 14.1562C10.1368 13.9803 9.89823 13.8815 9.64945 13.8815C9.40067 13.8815 9.16208 13.9803 8.98617 14.1562C8.81025 14.3322 8.71143 14.5708 8.71143 14.8195C8.71143 15.0683 8.81025 15.3069 8.98617 15.4828L14.3346 20.8312Z"
              fill="#FBFAFF"
            />
          </svg>
        </button>
        <button className="text-secondary1 w-full bg-[#EBD9FC] xs:rounded-[10px] lg:rounded-button xs:py-[6px] lg:py-[12px] lg:px-[20px] xs:px-[10px] flex items-center text-center justify-center">
          <p className="capitalize text-secondary1 xs:text-[12px] lg:text-base  font-medium mr-[12px]">
            Send
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
          >
            <g clip-path="url(#clip0_211_317)">
              <path
                d="M16.2119 14.2879C16.6695 14.7455 17.4115 14.7456 17.8692 14.2879L22.841 9.31605C23.2987 8.85843 23.2987 8.1164 22.841 7.65879C22.3834 7.20117 21.6414 7.20111 21.1838 7.65879L16.2119 12.6306C15.7542 13.0883 15.7542 13.8302 16.2119 14.2879Z"
                fill="#10002B"
              />
              <path
                d="M2.95384 9.31607C1.5831 10.6868 1.5831 12.9172 2.95384 14.2879C3.39007 14.7242 3.9344 15.0387 4.5279 15.1976L12.3745 17.2993C12.776 17.4069 13.0931 17.724 13.2007 18.1256L15.3023 25.9719C15.4612 26.5655 15.7759 27.1099 16.2121 27.5461C17.5859 28.92 19.8098 28.9203 21.1839 27.5462C21.5347 27.1954 21.8023 26.784 21.9793 26.3237L30.2657 4.77898C30.7643 3.483 30.4521 2.01136 29.4703 1.02962C28.4886 0.047884 27.0168 -0.264362 25.721 0.234212L4.17628 8.5206C3.71585 8.69773 3.30452 8.96533 2.95384 9.31607ZM4.6111 10.9733C4.72841 10.856 4.86522 10.7668 5.01763 10.7082L26.5624 2.42175C27.0009 2.25306 27.4903 2.36421 27.8131 2.68695C28.1405 3.01437 28.2445 3.50527 28.0783 3.93757V3.93763L19.7917 25.4824C19.7332 25.6348 19.644 25.7715 19.5266 25.8888C19.0687 26.3468 18.3275 26.3469 17.8693 25.8888C17.7216 25.7411 17.6197 25.5652 17.5663 25.3657L15.4646 17.5193C15.141 16.3108 14.1911 15.3595 12.9808 15.0354L5.13417 12.9337C4.93477 12.8803 4.75882 12.7784 4.6111 12.6306C4.15419 12.1737 4.15419 11.4302 4.6111 10.9733Z"
                fill="#10002B"
              />
              <path
                d="M0.843213 29.6568C1.30083 30.1144 2.0428 30.1145 2.50048 29.6568L7.47233 24.6849C7.93001 24.2273 7.93001 23.4853 7.47233 23.0277C7.01466 22.5701 6.27269 22.57 5.81507 23.0277L0.843213 27.9995C0.385596 28.4572 0.385596 29.1991 0.843213 29.6568Z"
                fill="#10002B"
              />
              <path
                d="M9.12943 29.6567L12.444 26.3422C12.9016 25.8845 12.9016 25.1425 12.444 24.6849C11.9863 24.2273 11.2443 24.2272 10.7867 24.6849L7.47216 27.9994C7.01449 28.4571 7.01449 29.1991 7.47216 29.6567C7.92984 30.1143 8.67181 30.1144 9.12943 29.6567Z"
                fill="#10002B"
              />
              <path
                d="M0.843213 23.0277C1.30083 23.4853 2.0428 23.4854 2.50048 23.0277L5.81501 19.7131C6.27269 19.2555 6.27269 18.5135 5.81501 18.0559C5.35733 17.5983 4.61536 17.5982 4.15774 18.0559L0.843213 21.3704C0.385596 21.828 0.385596 22.57 0.843213 23.0277Z"
                fill="#10002B"
              />
            </g>
            <defs>
              <clipPath id="clip0_211_317">
                <rect
                  width="30"
                  height="30"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </Modal>
      <div className="lg:text-[20px] xs:text-[14px]">
        <div className="flex items-center mb-[32px] lg:text-[24px] xs:text-[18px]">
          <p>Backend Developer</p>{" "}
          <span className="lg:mx-[16px] xs:mx-[8px] w-[62px] xs:w-[30px] h-[1px] bg-[#EBD9FC]" />{" "}
          <p>Java - Spring</p>
        </div>
        <p className="font-[600] mb-[16px]">Responsibilities :</p>
        <ul className="capitalize list-disc	mb-[64px] ml-[20px]">
          <li className="mb-[5px]">
            2+ years of commercial development experience;
          </li>
          <li className="mb-[5px]">
            Perfect knowledge of the Russian language (English will be +)
          </li>
          <li className="mb-[5px]">understanding of SQL/NoSQL;</li>
          <li className="mb-[5px]">ability to write SQL queries;</li>
          <li className="mb-[5px]">experience in RESTful API development;</li>
          <li className="mb-[5px]">understanding of GraphQL;</li>
        </ul>
        <p className="font-[600] mb-[16px]">Requirements :</p>
        <ul className="capitalize list-disc	mb-[32px] ml-[20px]">
          <li className="mb-[5px]">
            writing readable, testable and efficient code;
          </li>
          <li className="mb-[5px]">
            backend development in Python Django/FastAPI;
          </li>
          <li className="mb-[5px]">development of microservice solutions;</li>
          <li className="mb-[5px]">
            integration with various external systems;
          </li>
          <li className="mb-[5px]">
            Perfect knowledge of the Russian language is a must!
          </li>
        </ul>
      </div>
      <PrimaryBtn onClick={() => setIsModalOpen(true)}>
        <p className="capitalize xs:text-[12px] lg:text-base text-[#FBFAFF] font-normal ">
          {" "}
          Send resume
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="30"
          viewBox="0 0 31 30"
          fill="none"
        >
          <path
            d="M9.7501 7.89995L20.3626 4.36245C25.1251 2.77495 27.7126 5.37495 26.1376 10.1374L22.6001 20.7499C20.2251 27.8874 16.3251 27.8874 13.9501 20.7499L12.9001 17.5999L9.7501 16.5499C2.6126 14.1749 2.6126 10.2874 9.7501 7.89995Z"
            stroke="#FBFAFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.1377 17.0625L17.6127 12.575"
            stroke="#FBFAFF"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </PrimaryBtn>
    </div>
  );
};

export default Vacancies;
