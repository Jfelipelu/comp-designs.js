import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go'
import Button from "../components/Button";


function ButtonPage() {
    const handleClick = () => {
        console.log("Click")
    };
    return(
        <div>
            <div>
                <Button primary rounded outline onClick={handleClick}>
                    <GoBell/>
                    asd
                </Button>
            </div>
            <div>
                <Button secondary>
                    <GoCloudDownload />
                    qwe
                </Button>
            </div>
            <div>
                <Button success rounded>
                    <GoDatabase/>
                    zxc
                </Button>
            </div>
            <div>
                <Button warning outline>
                    sdf
                </Button>
            </div>
            <div>
                <Button danger outline>
                    dfg
                </Button>
            </div>
        </div>
    );
};

export default ButtonPage;