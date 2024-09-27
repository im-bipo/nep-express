import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import PlanYourTripForm from "./PlanYourTrip";

const DialogBtn = () => {
  return (
    <div className="w-fit px-6 py-2 bg-primary text-white rounded-lg">
      <Dialog>
        <DialogTrigger>Plan Your Trip</DialogTrigger>
        <DialogContent className="bg-white">
          <PlanYourTripForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogBtn;
