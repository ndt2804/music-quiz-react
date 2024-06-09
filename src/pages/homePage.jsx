import quizLogo from "../assets/quiz-logo.png";
import React, { useState } from "react";
import { Button } from "antd";
import { Modal } from "antd";
import { Input } from "antd";

function HomePage() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center items-center w-full mb-20">
            <img
              src={quizLogo}
              className=""
              alt="Vite logo"
              width={704}
              height={218}
            />

            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <Button
            onClick={showModal}
            size="large"
            type="primary"
            className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {" "}
            Play Now
          </Button>
          <Modal
            centered
            open={open}
            confirmLoading={confirmLoading}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <h1 className="text-center">Continue with guess </h1>
            <p>Write your name</p>
            <Input placeholder="Basic usage" />
          </Modal>
        </div>
      </section>
    </>
  );
}
export default HomePage;
