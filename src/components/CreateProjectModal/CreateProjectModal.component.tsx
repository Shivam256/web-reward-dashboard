import React, { MouseEventHandler, useState } from "react";
import Modal from "../Modal/modal.component";
import CustomInput from "../CustomInput/CustomInput.component";
import { trpc } from "../../utils/trpc";
import { useSession } from "next-auth/react";

type ProjectModalProps = {
  state: boolean;
  toggleModal: MouseEventHandler<HTMLElement>;
};

const CreateProjectModal = ({ state, toggleModal }: ProjectModalProps) => {
  const [name, setName] = useState<string>("");
  const { data } = useSession();

  const createProjectMutation = trpc.useMutation(["project.createByName"], {
    onError: (err) => {
      console.log(err, "error");
    },
    onSuccess: (data) => {
      console.log(data, "succewss");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(name);
    createProjectMutation.mutate({ name, ownerId: data?.user?.id || "default" });
  };

  return (
    <Modal
      open={state}
      toggleModal={toggleModal}
      modalClass="w-2/5 h-fit flex flex-col gap-8 items-center"
    >
      <h1 className="text-2xl font-semibold">CREATE NEW PROJECT</h1>
      <form
        className="flex w-full flex-col items-center gap-8"
        onSubmit={handleSubmit}
      >
        <CustomInput
          label="Project Name"
          name="projectName"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          autofocus={true}
        />
        <button className="h-fit w-fit rounded-md bg-primary py-2 px-16 text-sm font-semibold text-background">
          CREATE
        </button>
      </form>
    </Modal>
  );
};

export default CreateProjectModal;
