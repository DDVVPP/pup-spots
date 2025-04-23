import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { AddPinModalProps } from "@/lib/types";

const AddPinDialog = ({
  open,
  setOpen,
  title,
  setTitle,
  description,
  setDescription,
  handleSubmit,
}: AddPinModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-red-400">Add Pup Spot</DialogTitle>
          <DialogDescription>
            Add a title, description, and category for this pin.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="name"
              value={title}
              placeholder="Elysian Park"
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-3 rounded-md placeholder:text-slate-300"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              placeholder="Great views, green, coyotes around"
              onChange={(e) => setDescription(e.target.value)}
              className="col-span-3 rounded-md placeholder:text-slate-300"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            onClick={handleSubmit}
            className="bg-red-400 hover:bg-red-500  text-white"
          >
            Add Pin
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => setOpen(false)}
            className="text-slate-700 border-slate-300 hover:bg-slate-200"
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddPinDialog;
