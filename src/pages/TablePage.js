import React from 'react';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { pink, grey } from '@material-ui/core/colors';
import ContentCreate from '@material-ui/icons/Create';
import ContentAdd from '@material-ui/icons/Add';
import PageBase from '../components/PageBase';
import Data from '../data';

console.log("ContentCreate:", ContentCreate)

const TablePage = () => {

  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    editButton: {
      fill: grey[500]
    },
    columns: {
      id: {
        width: '10%'
      },
      name: {
        width: '40%'
      },
      price: {
        width: '20%'
      },
      category: {
        width: '20%'
      },
      edit: {
        width: '10%'
      }
    }
  };

  return (
    <PageBase title="Table Page"
              navigation="Application / Table Page">

      <div>
        <Link to="/form" >
          <Button mini={true} variant="fab" style={styles.floatingActionButton} backgroundColor={pink[500]}>
            <ContentAdd />
          </Button>
        </Link>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.columns.id}>ID</TableCell>
              <TableCell style={styles.columns.name}>Name</TableCell>
              <TableCell style={styles.columns.price}>Price</TableCell>
              <TableCell style={styles.columns.category}>Category</TableCell>
              <TableCell style={styles.columns.edit}>Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.tablePage.items.map(item =>
              <TableRow key={item.id}>
                <TableCell style={styles.columns.id}>{item.id}</TableCell>
                <TableCell style={styles.columns.name}>{item.name}</TableCell>
                <TableCell style={styles.columns.price}>{item.price}</TableCell>
                <TableCell style={styles.columns.category}>{item.category}</TableCell>
                <TableCell style={styles.columns.edit}>
                  <Link className="button" to="/form">
                    <Button 
                       mini={true}
                        variant="fab"
                        zDepth={0}
                        backgroundColor={grey[200]}
                        iconStyle={styles.editButton}>
                      <ContentCreate  />
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>    
      </div>
    </PageBase>
  );
};

export default TablePage;