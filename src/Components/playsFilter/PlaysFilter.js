import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function PlayFilter(props) {
  return (
    <div className="w-full px-4 pt-4">
      <div className="mx-auto w-full max-w-md  bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center gap-3 bg-White px-4 py-2 text-left text-sm font-medium text- hover:bg-white focus:outline-none focus-visible:ring ">
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-5 w-5 text-gray-500`}
                />
                <span className={`${open ? "text-red-600" : "text-gray-800"} text-base`}>
                  {props.title}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 flex pb-2 pt-4 text-sm text-gray-500">
                <div className="flex item-center gap-3 flex-wrap"> 
                  {props.tags.map((tag) => (
                    <>
                      
                      <div className="mr-2  text-base  cursor-pointer  bg-white border-2 px-2 py-1">
                     <span className="text-red-600"> {tag}</span> 
                      </div>
                    </>
                  ))}
                </div>
                
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
       
      </div>
    </div>
  );
};
