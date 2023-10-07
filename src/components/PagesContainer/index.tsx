import { PropsWithChildren} from "react";

export const PagesContainer = (props: PropsWithChildren) => {
    return(
        <div className="pt-16 ml-16">
            {props.children}
        </div>
    );
}