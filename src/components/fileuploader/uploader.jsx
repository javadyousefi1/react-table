// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
import { useEffect, useState } from "react";
// Register the crop plugin
import FilePondPluginImageCrop from 'filepond-plugin-image-crop';

// Register the plugin
registerPlugin(FilePondPluginImageCrop);
const Uploader = () => {
  const [files, setFiles] = useState([]);
  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <div className="App">
      <FilePond
        allowImageCrop={true}
        allowImageTransform={true}
        
        imageCropAspectRatio="1:1"
        allowImagePreview={true}
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        // server="/api"
        name="files"
        labelIdle="برای آپلود فایل به اینجا درگ کنید"
      />
    </div>
  );
};

export default Uploader;
