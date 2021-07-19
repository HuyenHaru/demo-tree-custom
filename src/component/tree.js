import { Button, Tooltip, Tree } from "antd";
import {
  DownOutlined,
  PlusOutlined,
  EditOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import "./../css/custom.css";

const CustomTree = () => {
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };
  const treeData = [
    {
      title: (
        <div>
          <span className="css-a">A</span>
          <span>ACheckin</span>
          <div className="icon-right">
            <Tooltip title="Add">
              <Button type="link" icon={<PlusOutlined />} />
            </Tooltip>
            <Tooltip title="Edit">
              <Button type="link" icon={<EditOutlined />} />
            </Tooltip>
          </div>
        </div>
      ),
      key: "0-0",
      children: [
        {
          title: (
            <div>
              Marketing ACheckin
              <div className="icon-right">
                <MoreOutlined className="css-icon" />
              </div>
            </div>
          ),
          key: "0-0-0",
          children: [
            {
              title: "Marketing ACheckin",
              key: "0-0-0-0",
            },
          ],
        },
        {
          title: (
            <div>
              BA ACheckin
              <div className="icon-right">
                <MoreOutlined className="css-icon" />
              </div>
            </div>
          ),
          key: "0-0-1",
          children: [
            {
              title: "BA ACheckin",
              key: "0-0-1-0",
            },
          ],
        },
        {
          title: (
            <div>
              Design ACheckin
              <div className="icon-right">
                <MoreOutlined className="css-icon" />
              </div>
            </div>
          ),
          key: "0-0-2",
          children: [
            {
              title: "Design ACheckin",
              key: "0-0-2-0",
            },
          ],
        },
        {
          title: (
            <div>
              Product ACheckin
              <div className="icon-right">
                <MoreOutlined className="css-icon" />
              </div>
            </div>
          ),
          key: "0-0-3",
          children: [
            {
              title: (
                <div>
                  Client ACheckin
                  <div className="icon-right">
                    <MoreOutlined className="css-icon" />
                  </div>
                </div>
              ),
              key: "0-0-3-0",
              children: [
                {
                  title: "Client ACheckin",
                  key: "0-0-3-0-0",
                },
              ],
            },
            {
              title: (
                <div>
                  Backend ACheckin
                  <div className="icon-right">
                    <MoreOutlined className="css-icon" />
                  </div>
                </div>
              ),
              key: "0-0-3-1",
              children: [
                {
                  title: "Client ACheckin",
                  key: "0-0-3-1-0",
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="custom-tree">
      <Tree
        className="draggable-tree"
        defaultSelectedKeys={["0-0"]}
        draggable
        blockNode
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={["0-0-3"]}
        onSelect={onSelect()}
        treeData={treeData}
      />
    </div>
  );
};

export default CustomTree;
