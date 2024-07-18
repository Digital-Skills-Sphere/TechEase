import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

const Accordian = () => {
  return (
    <div className=" px-28">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span>Web Development</span>
          </AccordionTrigger>
          <AccordionContent>
            Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
            Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
            condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
            Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit
            eu ante scelerisque vulputate.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span>Game Development</span>
          </AccordionTrigger>
          <AccordionContent>
            Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
            Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
            condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
            Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit
            eu ante scelerisque vulputate.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <span>App Development</span>
          </AccordionTrigger>
          <AccordionContent>
            Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
            Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
            condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
            Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit
            eu ante scelerisque vulputate.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <span>Graphic Designing</span>
          </AccordionTrigger>
          <AccordionContent>
            Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
            Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
            condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
            Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit
            eu ante scelerisque vulputate.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <span>Digital Marketing</span>
          </AccordionTrigger>
          <AccordionContent>
            Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
            Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
            condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam mi.
            Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a velit
            eu ante scelerisque vulputate.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Accordian;
