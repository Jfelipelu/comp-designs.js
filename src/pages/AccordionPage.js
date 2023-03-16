import Accordion from '../components/Accordion';


function AccordionPage() {
    const items = [
        {
            label: "mmgvo",
            content: "el te ama te odia lo da todo por ti",
            id: "1"
        },
        {
            label: "mmgvo",
            content: "mmgvo",
            id: "2"
        },
        {
            label: "mmgvo",
            content: "mmgvo",
            id: "3"
        },
    ];

    return(
        <Accordion items={items}/>
    );
};

export default AccordionPage;