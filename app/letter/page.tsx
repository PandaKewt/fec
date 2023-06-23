import "./style.css";
import Image from "next/image";
import letterBackground from "../../public/letterBackground.png";
import NextPage from "../component/NextPage";

export default function Letter() {
    return (
        <>
            <div className='flex w-screen h-screen justify-center items-center'>
                <div className='letterContainer'>
                    <p className='letterContext'>
                        Thân gửi anh chị K8 FEC,
                        <br />
                        Trong 2 tháng nước rút cuối cùng này, chúng em đều biết, và hiểu được sự nỗ lực, cố gắng của mọi người trong kì thi THPTQG. Dù vậy, anh
                        chị nhớ hãy dành một chút thời gian để bản thân được nghỉ ngơi, hoặc có thể đọc bức tâm thư này của FEC nhé!
                        <br />
                        Còn nhớ những ngày đầu tiên lứa K9 tụi em mới bước chân vào ngôi trường FPT này, cảm giác lạ lẫm, đôi khi còn rất dễ hụt chí, rồi “ma
                        xui quỷ khiến” thế nào mà chúng em lại sinh hoạt dưới mái nhà chung FEC, quãng thời gian đó quả khó khăn, vừa không được gặp nhau lại
                        còn là lúc CLB đang chật vật tìm chỗ đứng cho mình (chỉ vài chục tương tác, một vài bài đăng, dù cố gắng bao nhiêu nhưng cũng không tạo
                        được ảnh hưởng..). Tưởng chừng, FEC thời điểm đó sẽ phải dừng lại nhưng chắc chắn có 1 lí do mà đến bây giờ FEC vẫn sống - đó là tinh
                        thần đoàn kết từ bên trong CLB, dù cho hoàn cảnh có thế nào, thì vẫn lạc quan, vui vẻ, buổi chiều thứ 4 nào cũng bonding, chơi game, rồi
                        tâm sự. Khóa K9 lúc đó nếu như không có sự sát sao và hướng dẫn của mọi người thì chắc là bây giờ bọn em ôm nhau để sống qua ngày quá ^^
                        <br />
                        Để được FEC như ngày hôm nay, sống và trỗi dậy một cách mạnh mẽ và phi thường, công sức và sự kiên trì của anh chị đã trở thành tấm
                        gương cho bọn em, từ những đứa trẻ không có gì trong tay, thậm chí còn có ý định sẽ ỷ lại, nhận ra rằng mọi người cố gắng như thế, tại
                        sao mình lại không làm được? Và cứ như thế, chúng em yêu CLB từ lúc nào không hay, gắn bó với nó và coi nó như 1 gia đình.
                        <br />
                        Gia đình ấy đã xây dựng CLB từ những nền móng đầu tiên, phát triển Series mới (Learning English with FEC, FEC Radio,...), đa dạng hình
                        thức, có giai đoạn mọi người cùng làm video Giáng Sinh, Tết, hay FEC Radio, chúng em nhìn thấy sự nghiêm túc của mọi người, hơn hết là
                        cái tâm đặt vào nó. Người ta bảo là “Muốn đi nhanh thì đi một mình, muốn đi xa thì đi cùng nhau”, cùng nhau, FEC đã làm nên kì tích.
                        <br />
                        Chúng em giờ đây đã biết tự tổ chức dự án, biết tự xây dựng, và quan trọng là biết tự yêu thương nhau, tất cả gói gọn trong 1 từ “Tin
                        tưởng” lẫn nhau, chúng em biết ơn anh chị vì nhiều thứ, nhưng biết ơn nhất là sự tín nhiệm của anh chị dành cho chúng em, dạy cho chúng
                        em cách giúp đỡ và “nương tựa” lẫn nhau trước thử thách - “Từ trước đến nay, FEC không sợ ai cả, chỉ sợ không cùng nhau cố gắng”.
                        <br />
                        Gia đình FEC tụi em vẫn luôn chờ anh chị trở về, mong rằng năm học lớp 12 này sẽ để lại trong lòng anh chị những kỉ niệm thật đẹp, khó
                        quên. Qua thư, chúng em, những FEC-ers nhỏ cảm thấy thật sự tự hào về anh chị. Những người đã truyền được lửa, nhiệt huyết cho chúng em
                        để FEC ngày một phát triển hơn. Mong cho anh chị và tất cả chúng ta đều có một tương lai thật đẹp và hạnh phúc. Hạnh phúc ở đây là được
                        sống và làm điều mình thích, được đi theo lý trí và tình cảm của mình, không phụ thuộc, không bị ai ngăn cản.
                        <br />
                        Chúng em chân thành cảm ơn anh chị, cảm ơn vì đã đến và chỉ dạy cho chúng em những bài học ý nghĩa. Chúng em luôn biết ơn và yêu quý anh
                        chị. Chúc anh chị sẽ luôn tỏa sáng như ánh mặt trời. Chúng em tin rằng, bằng đôi tay của mình, các anh chị sẽ vẽ nên một cuộc đời thật
                        đẹp và ý nghĩa…
                        <br />
                        Thân ái, CLB FEC. Thân gửi anh chị K8 FEC,
                        <br />
                        Trong 2 tháng nước rút cuối cùng này, chúng em đều biết, và hiểu được sự nỗ lực, cố gắng của mọi người trong kì thi THPTQG. Dù vậy, anh
                        chị nhớ hãy dành một chút thời gian để bản thân được nghỉ ngơi, hoặc có thể đọc bức tâm thư này của FEC nhé!
                        <br />
                        Còn nhớ những ngày đầu tiên lứa K9 tụi em mới bước chân vào ngôi trường FPT này, cảm giác lạ lẫm, đôi khi còn rất dễ hụt chí, rồi “ma
                        xui quỷ khiến” thế nào mà chúng em lại sinh hoạt dưới mái nhà chung FEC, quãng thời gian đó quả khó khăn, vừa không được gặp nhau lại
                        còn là lúc CLB đang chật vật tìm chỗ đứng cho mình (chỉ vài chục tương tác, một vài bài đăng, dù cố gắng bao nhiêu nhưng cũng không tạo
                        được ảnh hưởng..). Tưởng chừng, FEC thời điểm đó sẽ phải dừng lại nhưng chắc chắn có 1 lí do mà đến bây giờ FEC vẫn sống - đó là tinh
                        thần đoàn kết từ bên trong CLB, dù cho hoàn cảnh có thế nào, thì vẫn lạc quan, vui vẻ, buổi chiều thứ 4 nào cũng bonding, chơi game, rồi
                        tâm sự. Khóa K9 lúc đó nếu như không có sự sát sao và hướng dẫn của mọi người thì chắc là bây giờ bọn em ôm nhau để sống qua ngày quá ^^
                        <br />
                        Để được FEC như ngày hôm nay, sống và trỗi dậy một cách mạnh mẽ và phi thường, công sức và sự kiên trì của anh chị đã trở thành tấm
                        gương cho bọn em, từ những đứa trẻ không có gì trong tay, thậm chí còn có ý định sẽ ỷ lại, nhận ra rằng mọi người cố gắng như thế, tại
                        sao mình lại không làm được? Và cứ như thế, chúng em yêu CLB từ lúc nào không hay, gắn bó với nó và coi nó như 1 gia đình.
                        <br />
                        Gia đình ấy đã xây dựng CLB từ những nền móng đầu tiên, phát triển Series mới (Learning English with FEC, FEC Radio,...), đa dạng hình
                        thức, có giai đoạn mọi người cùng làm video Giáng Sinh, Tết, hay FEC Radio, chúng em nhìn thấy sự nghiêm túc của mọi người, hơn hết là
                        cái tâm đặt vào nó. Người ta bảo là “Muốn đi nhanh thì đi một mình, muốn đi xa thì đi cùng nhau”, cùng nhau, FEC đã làm nên kì tích.
                        <br />
                        Chúng em giờ đây đã biết tự tổ chức dự án, biết tự xây dựng, và quan trọng là biết tự yêu thương nhau, tất cả gói gọn trong 1 từ “Tin
                        tưởng” lẫn nhau, chúng em biết ơn anh chị vì nhiều thứ, nhưng biết ơn nhất là sự tín nhiệm của anh chị dành cho chúng em, dạy cho chúng
                        em cách giúp đỡ và “nương tựa” lẫn nhau trước thử thách - “Từ trước đến nay, FEC không sợ ai cả, chỉ sợ không cùng nhau cố gắng”.
                        <br />
                        Gia đình FEC tụi em vẫn luôn chờ anh chị trở về, mong rằng năm học lớp 12 này sẽ để lại trong lòng anh chị những kỉ niệm thật đẹp, khó
                        quên. Qua thư, chúng em, những FEC-ers nhỏ cảm thấy thật sự tự hào về anh chị. Những người đã truyền được lửa, nhiệt huyết cho chúng em
                        để FEC ngày một phát triển hơn. Mong cho anh chị và tất cả chúng ta đều có một tương lai thật đẹp và hạnh phúc. Hạnh phúc ở đây là được
                        sống và làm điều mình thích, được đi theo lý trí và tình cảm của mình, không phụ thuộc, không bị ai ngăn cản.
                        <br />
                        Chúng em chân thành cảm ơn anh chị, cảm ơn vì đã đến và chỉ dạy cho chúng em những bài học ý nghĩa. Chúng em luôn biết ơn và yêu quý anh
                        chị. Chúc anh chị sẽ luôn tỏa sáng như ánh mặt trời. Chúng em tin rằng, bằng đôi tay của mình, các anh chị sẽ vẽ nên một cuộc đời thật
                        đẹp và ý nghĩa…
                        <br />
                        Thân ái, CLB FEC.
                    </p>
                    <Image src={letterBackground} alt='' fill className='letterBackground' />
                </div>
            </div>
            <NextPage href='/gallery' />
        </>
    );
}
