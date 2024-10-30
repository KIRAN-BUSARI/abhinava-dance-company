import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const SearchPage = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <Search className="size-5 dark:text-white" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-center text-[#79348D] dark:text-white">
            Search
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <search>
            <form>
              <Input name="search" id="search" placeholder="Enter text here." />
            </form>
          </search>
        </div>
        <div className="flex justify-center">
          <Button className="bg-[#793480] hover:bg-gray-100 hover:text-[#793480] hover:outline dark:text-white hover:dark:text-[#793480]">
            Search
          </Button>
        </div>
        <DialogFooter>
          <div className="flex flex-col">
            <h1 className="font-roboto mb-4 text-center text-4xl">
              Faculty&apos;s Page
            </h1>
            <p className="text-center text-lg">
              {' '}
              This page is for the usage of Abhinava Dance School Faculty.
              Please{' '}
              <Link to="#" className="text-[#793480] underline">
                click here
              </Link>{' '}
              to proceed.{' '}
            </p>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchPage;
