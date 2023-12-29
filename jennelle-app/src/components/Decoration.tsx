import { ReactSVG } from "react-svg";
import squiggle from "../svg_icons/squiggle.svg"
import flower from "../svg_icons/flower.svg"
import circle from "../svg_icons/circle.svg"

export default function Decoration({ num }: { num?: number }) {
    const icons = [squiggle, flower, circle];
    const color_class = ["stroke-jenny_red", "stroke-jenny_gold", "stroke-jenny_purple"];
    const num_icons = num || 10;

    const icon_list = [];

    for (let i = 0; i < num_icons; i++) {
        icon_list.push(
            <ReactSVG key={i} src={icons[randomInt(icons.length)]}
                className={`${color_class[randomInt(color_class.length)]}`}
                style={{
                    position: "absolute",
                    left: `${randomInt(100)}%`,
                    top: `${randomInt(100)}%`,
                    transform: `scale(${randomInt(3) + 1})`,
                    opacity: `${randomInt(50) + 50}%`,
                    zIndex: 1,
                }}
            />
        );
    }

    return (
        <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden">
            {icon_list}
        </div>
    )
}

function randomInt(max: number) {
    return Math.floor(Math.random() * max);
}