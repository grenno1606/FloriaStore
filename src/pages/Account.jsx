import { Button } from "../components/buttons/Button";

export const Account = () => {
  return (
    <div className="my-16 xl:mt-20">
      <div>
        <div className="flex flex-col items-center gap-6 pt-16">
          <div className="text-center">
            <p className="font-semibold">ToUyen1910@gmail.com</p>
            <p>
              (not <span className="font-semibold">touyen1910@gmail.com</span>?
              <button className="ml-1.5 cursor-pointer font-semibold hover:text-pink-dark">
                Sign out
              </button>
              ).
            </p>
          </div>
          <div className="text-center">
            <p className="font-semibold tracking-[1px]">RECENT ORDERS</p>
            <span>You haven't placed any orders yet.</span>
          </div>
          <div className="text-center flex gap-3">
            <p className="font-semibold tracking-[1px]">BILLING ADDRESS</p>
            <Button variant="ghost">Edit</Button>
          </div>
        </div>
        <p className="text-center mt-20">Viet Nam</p>
      </div>
    </div>
  );
};
